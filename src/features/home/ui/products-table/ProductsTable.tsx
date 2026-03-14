import { useCallback, useMemo, useState } from "react";

import { PRODUCTS_PAGE_SIZE } from "@/features/home/constants/pagination";
import type { ProductSortField } from "@/features/home/types/product";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { cn } from "@/shared/utils/cn";
import {
  formatPriceParts,
  formatRating,
  truncateText,
} from "@/shared/utils/format";

import type {
  ProductsTableColumn,
  ProductsTableSortDirection,
} from "./products-table-context";
import type { ProductsTableItem } from "./ProductsTable.types";
import { ProductsTableAddButton } from "./ProductsTableAddButton";
import { ProductsTableBody } from "./ProductsTableBody";
import { ProductsTableCell } from "./ProductsTableCell";
import { ProductsTableHead } from "./ProductsTableHead";
import { ProductsTableMoreButton } from "./ProductsTableMoreButton";
import { ProductsTableRoot } from "./ProductsTableRoot";
import { ProductsTableRow } from "./ProductsTableRow";

const SKELETON_PLACEHOLDER_CLASS =
  "h-4 rounded bg-(--neutral-40) animate-pulse";

export interface ProductsTableProps {
  items: ProductsTableItem[];
  sortBy: ProductSortField;
  sortDirection: ProductsTableSortDirection;
  isLoading?: boolean;
  onSortChange: (
    field: ProductSortField,
    direction: ProductsTableSortDirection,
  ) => void;
}

export const ProductsTable = (props: ProductsTableProps) => {
  const itemsKey = useMemo(
    () => props.items.map((item) => item.id).join(","),
    [props.items],
  );

  return <ProductsTableWithSelection key={itemsKey} {...props} />;
};

const ProductsTableWithSelection = ({
  items,
  sortBy,
  sortDirection,
  isLoading,
  onSortChange,
}: ProductsTableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggleSelect = useCallback((id: string) => {
    setSelectedIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((currentId) => currentId !== id);
      }

      return [...previous, id];
    });
  }, []);

  const handleToggleSelectAll = useCallback(() => {
    setSelectedIds((previous) => {
      if (previous.length === items.length) {
        return [];
      }

      return items.map((item) => String(item.id));
    });
  }, [items]);

  const columns = useMemo<ProductsTableColumn[]>(
    () => [
      { id: "select", width: 58 },
      { id: "title", width: 310 },
      { id: "brand", flex: 1 },
      { id: "sku", flex: 1 },
      { id: "rating", flex: 1 },
      { id: "price", flex: 1 },
      { id: "actions", flex: 1 },
    ],
    [],
  );

  const handleSortChange = useCallback(
    (field: ProductSortField, direction: ProductsTableSortDirection) => {
      onSortChange(field, direction);
    },
    [onSortChange],
  );

  const createToggleSelectHandler = useCallback(
    (id: string) => () => {
      handleToggleSelect(id);
    },
    [handleToggleSelect],
  );

  const renderPrice = useCallback((price: number) => {
    const priceParts = formatPriceParts(price);

    return (
      <span className="text-regular">
        <span className="text-(--text-primary)">{priceParts.integerPart}</span>
        <span className="text-(--text-muted)">{priceParts.decimalPart}</span>
      </span>
    );
  }, []);

  const isRowSelected = (rowId: string) => {
    return selectedIds.includes(rowId);
  };

  const isAllSelected = items.length > 0 && selectedIds.length === items.length;

  return (
    <div className="w-full">
      <ProductsTableRoot
        columns={columns}
        selectable
        selectedRowIds={selectedIds}
        onToggleRow={handleToggleSelect}
        onToggleAll={handleToggleSelectAll}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      >
        <ProductsTableHead>
          <ProductsTableRow
            rowId="__header__"
            selectable={false}
            variant="head"
          >
            <ProductsTableCell
              asHeader
              columnIndex={0}
              className="flex items-center justify-center"
            >
              <Checkbox
                checked={isAllSelected}
                aria-label="Выделить все товары на странице"
                className="justify-center"
                onChange={handleToggleSelectAll}
              />
            </ProductsTableCell>
            <ProductsTableCell
              asHeader
              columnIndex={1}
              sortable
              sortField="title"
              align="left"
            >
              Наименование
            </ProductsTableCell>
            <ProductsTableCell
              asHeader
              columnIndex={2}
              align="center"
              sortable
              sortField="brand"
            >
              Вендор
            </ProductsTableCell>
            <ProductsTableCell
              asHeader
              columnIndex={3}
              align="center"
              sortable
              sortField="sku"
            >
              Артикул
            </ProductsTableCell>
            <ProductsTableCell
              asHeader
              columnIndex={4}
              align="center"
              sortable
              sortField="rating"
            >
              Оценка
            </ProductsTableCell>
            <ProductsTableCell
              asHeader
              columnIndex={5}
              align="center"
              sortable
              sortField="price"
            >
              Цена, ₽
            </ProductsTableCell>
            <ProductsTableCell asHeader columnIndex={6}>
              {null}
            </ProductsTableCell>
          </ProductsTableRow>
        </ProductsTableHead>

        <ProductsTableBody>
          {isLoading
            ? Array.from({ length: PRODUCTS_PAGE_SIZE }).map((_, index) => (
                <ProductsTableRow
                  key={`skeleton-${index}`}
                  rowId={`skeleton-${index}`}
                  selectable={false}
                >
                  <ProductsTableCell
                    columnIndex={0}
                    className="flex items-center justify-center"
                  >
                    <div
                      className={cn(
                        SKELETON_PLACEHOLDER_CLASS,
                        "h-5 w-5 shrink-0 rounded",
                      )}
                      aria-hidden
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={1}>
                    <div className="flex items-center gap-4.5">
                      <div
                        className="h-[48px] w-[48px] shrink-0 animate-pulse rounded-[8px] bg-(--neutral-40)"
                        aria-hidden
                      />
                      <div className="flex flex-col gap-2.5">
                        <div
                          className={cn(SKELETON_PLACEHOLDER_CLASS, "w-32")}
                          aria-hidden
                        />
                        <div
                          className={cn(SKELETON_PLACEHOLDER_CLASS, "w-20")}
                          aria-hidden
                        />
                      </div>
                    </div>
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={2} align="center">
                    <div
                      className={cn(SKELETON_PLACEHOLDER_CLASS, "mx-auto w-16")}
                      aria-hidden
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={3} align="center">
                    <div
                      className={cn(SKELETON_PLACEHOLDER_CLASS, "mx-auto w-14")}
                      aria-hidden
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={4} align="center">
                    <div
                      className={cn(SKELETON_PLACEHOLDER_CLASS, "mx-auto w-8")}
                      aria-hidden
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={5} align="center">
                    <div
                      className={cn(SKELETON_PLACEHOLDER_CLASS, "mx-auto w-12")}
                      aria-hidden
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={6} align="center">
                    <div
                      className={cn(
                        SKELETON_PLACEHOLDER_CLASS,
                        "mx-auto h-8 w-20",
                      )}
                      aria-hidden
                    />
                  </ProductsTableCell>
                </ProductsTableRow>
              ))
            : items.map((item) => (
                <ProductsTableRow
                  key={String(item.id)}
                  rowId={String(item.id)}
                  isSelected={isRowSelected(String(item.id))}
                >
                  <ProductsTableCell
                    columnIndex={0}
                    className="flex items-center justify-center"
                  >
                    <Checkbox
                      checked={isRowSelected(String(item.id))}
                      aria-label="Выбрать товар"
                      className={cn("relative z-10 justify-center")}
                      onChange={createToggleSelectHandler(String(item.id))}
                    />
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={1}>
                    <div className="flex items-center gap-4.5">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-[48px] w-[48px] shrink-0 rounded-[8px] border border-(--neutral-50) bg-(--neutral-130) object-cover"
                        />
                      ) : (
                        <div
                          className="h-[48px] w-[48px] shrink-0 rounded-[8px] border border-(--neutral-50) bg-(--neutral-130)"
                          aria-hidden
                        />
                      )}
                      <div className="flex flex-col gap-2.5">
                        <span className="text-body leading-[11px]! text-(--neutral-900)">
                          {truncateText(item.title, 25)}
                        </span>
                        <span className="text-label-3 leading-[10px]! text-(--neutral-140)">
                          {truncateText(item.category, 25)}
                        </span>
                      </div>
                    </div>
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={2} align="center">
                    <span className="text-body-bold">{item.brand}</span>
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={3} align="center">
                    <span className="text-body text-black">
                      {item.sku ?? ""}
                    </span>
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={4} align="center">
                    <span
                      className={cn(
                        "text-body",
                        item.rating < 3 ? "text-(--danger)" : "text-black",
                      )}
                    >
                      {formatRating(item.rating)}
                      <span className="text-black">/5</span>
                    </span>
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={5} align="center">
                    {renderPrice(item.price)}
                  </ProductsTableCell>
                  <ProductsTableCell columnIndex={6} align="center">
                    <div className="flex items-center justify-center gap-8">
                      <ProductsTableAddButton />
                      <ProductsTableMoreButton />
                    </div>
                  </ProductsTableCell>
                </ProductsTableRow>
              ))}
        </ProductsTableBody>
      </ProductsTableRoot>
    </div>
  );
};
