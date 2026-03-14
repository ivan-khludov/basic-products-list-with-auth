import { type MouseEvent } from "react";

import { tv } from "tailwind-variants";

import { CaretLeftIcon } from "@/shared/icons/CaretLeftIcon";
import { CaretRightIcon } from "@/shared/icons/CaretRightIcon";

const MAX_VISIBLE_PAGES = 5;

const getVisibleStartForPage = (
  currentPage: number,
  totalPages: number,
): number => {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return 1;
  }

  const maxStart = totalPages - (MAX_VISIBLE_PAGES - 1);

  return Math.max(1, Math.min(currentPage - (MAX_VISIBLE_PAGES - 1), maxStart));
};

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  className?: string;
  disabled?: boolean;
  onPageChange: (page: number) => void;
}

const paginationStyles = tv({
  slots: {
    containerSlot: ["inline-flex items-center gap-4"],
    iconButtonSlot: [
      "h-5 w-5 cursor-pointer text-(--neutral-140) transition-colors",
      "hover:text-(--text-primary)",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    pageButtonSlot: [
      "inline-flex h-10 min-w-10 items-center justify-center cursor-pointer box-border rounded-[4px] border border-(--neutral-50) bg-white text-label text-(--neutral-140) shadow-[var(--shadow-2)] transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  },
  variants: {
    pageActive: {
      true: {
        pageButtonSlot:
          "bg-(--brand-primary-soft) text-(--text-inverse) border-transparent",
      },
      false: {
        pageButtonSlot: "hover:text-(--text-primary)",
      },
    },
  },
  defaultVariants: {
    pageActive: false,
  },
});

export const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, className, disabled, onPageChange } = props;

  const visibleStart = getVisibleStartForPage(currentPage, totalPages);
  const visibleEnd =
    totalPages <= MAX_VISIBLE_PAGES
      ? totalPages
      : Math.min(visibleStart + (MAX_VISIBLE_PAGES - 1), totalPages);
  const visiblePages = Array.from(
    { length: visibleEnd - visibleStart + 1 },
    (_, index) => visibleStart + index,
  );

  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const handlePageClick = (
    event: MouseEvent<HTMLButtonElement>,
    page: number,
  ) => {
    event.preventDefault();

    if (disabled || page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  const handlePrevClick = (_event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || isFirstPage) {
      return;
    }

    onPageChange(currentPage - 1);
  };

  const handleNextClick = (_event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLastPage) {
      return;
    }

    onPageChange(currentPage + 1);
  };

  const createPageButtonClickHandler = (page: number) => {
    return (event: MouseEvent<HTMLButtonElement>) => {
      handlePageClick(event, page);
    };
  };

  const { containerSlot, iconButtonSlot } = paginationStyles();

  return (
    <nav aria-label="Пагинация" className={containerSlot({ className })}>
      <button
        type="button"
        onClick={handlePrevClick}
        disabled={disabled ?? isFirstPage}
        aria-label="Предыдущая страница"
        className={iconButtonSlot()}
      >
        <CaretLeftIcon size={20} />
      </button>

      <ol className="flex list-none items-center gap-2">
        {visiblePages.map((page) => {
          const isActive = page === currentPage;
          const { pageButtonSlot } = paginationStyles({
            pageActive: isActive,
          });

          return (
            <li key={page}>
              <button
                type="button"
                onClick={createPageButtonClickHandler(page)}
                disabled={disabled}
                aria-label={`Страница ${page}`}
                aria-current={isActive ? "page" : undefined}
                className={pageButtonSlot()}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ol>

      <button
        type="button"
        onClick={handleNextClick}
        disabled={disabled ?? isLastPage}
        aria-label="Следующая страница"
        className={iconButtonSlot()}
      >
        <CaretRightIcon size={20} />
      </button>
    </nav>
  );
};
