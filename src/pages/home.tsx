import { useCallback, useState } from "react";

import { PRODUCTS_PAGE_SIZE } from "@/features/home/constants/pagination";
import {
  AddProductSection,
  AddProductSectionButton,
  AddProductSectionForm,
} from "@/features/home/containers/add-product-section";
import { HomePageSearch } from "@/features/home/containers/home-page-search";
import { useProductsViewStore } from "@/features/home/model/products-view-store";
import { useProductsList } from "@/features/home/model/use-products-list";
import type {
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";
import { LoadingBar } from "@/features/home/ui/loading-bar";
import { PaginationSummary } from "@/features/home/ui/pagination-summary";
import { Pagination } from "@/features/home/ui/pagination/Pagination";
import { ProductsTable } from "@/features/home/ui/products-table";
import { RefreshButton } from "@/features/home/ui/refresh-button";

export const HomePage = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const page = useProductsViewStore((state) => state.page);
  const sortBy = useProductsViewStore((state) => state.sortBy);
  const sortDirection = useProductsViewStore((state) => state.sortDirection);
  const setPage = useProductsViewStore((state) => state.setPage);
  const setSort = useProductsViewStore((state) => state.setSort);
  const resetPage = useProductsViewStore((state) => state.resetPage);

  const { data, isLoading, isFetching, refetch } = useProductsList({
    page,
    search: debouncedSearch,
    sortBy,
    sortDirection,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PAGE_SIZE));
  const from = total === 0 ? 0 : (page - 1) * PRODUCTS_PAGE_SIZE + 1;
  const to = Math.min(page * PRODUCTS_PAGE_SIZE, total);

  const handleSortChange = useCallback(
    (field: ProductSortField, direction: ProductSortDirection) => {
      setSort(field, direction);
    },
    [setSort],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const handleDebouncedSearchChange = useCallback(
    (value: string) => {
      setDebouncedSearch(value);
      resetPage();
    },
    [resetPage],
  );

  return (
    <div className="flex min-h-screen flex-col pt-5">
      {isFetching && <LoadingBar />}
      <header className="mb-7.5 rounded-[10px] bg-white px-7.5 py-7">
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <h1 className="text-heading-3">Товары</h1>
          <div className="mx-auto w-full max-w-[1023px]">
            <HomePageSearch onDebouncedChange={handleDebouncedSearchChange} />
          </div>
          <div />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-10 rounded-[10px] bg-white px-7.5 py-7.5">
        <AddProductSection onSuccess={refetch}>
          <div className="flex items-center justify-between">
            <h2 className="text-heading-4 text-(--neutral-600)">Все позиции</h2>
            <div className="flex gap-2">
              <RefreshButton onClick={refetch} />
              <AddProductSectionButton />
            </div>
          </div>
          <AddProductSectionForm />
          <ProductsTable
            items={products}
            sortBy={sortBy}
            sortDirection={sortDirection}
            isLoading={isLoading}
            onSortChange={handleSortChange}
          />
          <div className="flex items-center justify-between py-[11px]">
            <PaginationSummary from={from} to={to} total={total} />
            {total > 0 && (
              <Pagination
                totalPages={totalPages}
                currentPage={page}
                disabled={isFetching}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </AddProductSection>
      </main>
    </div>
  );
};
