import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import type {
  ProductSortDirection,
  ProductSortField,
} from "@/features/home/types/product";

import { ProductsTable } from "./ProductsTable";
import type { ProductsTableItem } from "./ProductsTable.types";

const mockItems: ProductsTableItem[] = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    category: "Smartphones",
    brand: "Apple",
    sku: "APL-IP15P",
    price: 999,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Budget Phone",
    category: "Smartphones",
    brand: "Generic",
    sku: "GEN-BP1",
    price: 99,
    rating: 2.5,
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    category: "Audio",
    brand: "SoundMax",
    sku: "SM-WE100",
    price: 79,
    rating: 4.2,
  },
];

const meta: Meta<typeof ProductsTable> = {
  component: ProductsTable,
  title: "Features/Home/ProductsTable",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onSortChange: { action: "sortChange" },
  },
};

export default meta;

type Story = StoryObj<typeof ProductsTable>;

export const Default: Story = {
  args: {
    items: mockItems,
    sortBy: "title",
    sortDirection: "asc",
    isLoading: false,
    onSortChange: () => {},
  },
};

export const Loading: Story = {
  args: {
    items: [],
    sortBy: "title",
    sortDirection: "asc",
    isLoading: true,
    onSortChange: () => {},
  },
};

export const WithSortState: Story = {
  render: function WithSortState(args) {
    const [sortBy, setSortBy] = useState<ProductSortField>("title");
    const [sortDirection, setSortDirection] =
      useState<ProductSortDirection>("asc");

    const handleSortChange = (
      field: ProductSortField,
      direction: ProductSortDirection,
    ) => {
      setSortBy(field);
      setSortDirection(direction);
    };

    return (
      <ProductsTable
        {...args}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />
    );
  },
  args: {
    items: mockItems,
    sortBy: "title",
    sortDirection: "asc",
    isLoading: false,
    onSortChange: () => {},
  },
};
