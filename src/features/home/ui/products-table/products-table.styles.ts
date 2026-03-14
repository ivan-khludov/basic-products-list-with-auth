import { tv } from "tailwind-variants";

export const productsTableStyles = tv({
  slots: {
    rootSlot: "w-full flex flex-col",
    headSlot: "flex flex-col",
    bodySlot: "flex flex-col gap-px bg-(--neutral-50)",
    rowSlot: "flex w-full h-[73px]",
    cellSlot:
      "box-border flex-shrink-0 whitespace-nowrap px-3 py-2.5 text-body text-(--neutral-900)",
    headerCellSlot:
      "box-border flex-shrink-0 whitespace-nowrap px-3 py-2.5 heading-6 text-(--neutral-140)",
    headerButtonSlot: "cursor-pointer hover:text-(--text-primary)",
    headerInnerSlot: "flex items-center",
  },
  variants: {
    rowSelected: {
      true: {
        rowSlot:
          "relative before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:w-[3px] before:bg-(--neutral-500) before:content-['']",
      },
      false: {},
    },
    align: {
      left: {
        cellSlot: "flex items-center justify-start text-left",
        headerCellSlot: "flex items-center justify-start text-left",
        headerInnerSlot: "justify-start",
      },
      center: {
        cellSlot: "flex items-center justify-center text-center",
        headerCellSlot: "flex items-center justify-center text-center",
        headerInnerSlot: "justify-center",
      },
      right: {
        cellSlot: "flex items-center justify-end text-right",
        headerCellSlot: "flex items-center justify-end text-right",
        headerInnerSlot: "justify-end",
      },
    },
    headerLabelActive: {
      true: {
        headerCellSlot: "text-(--text-primary)",
      },
      false: {},
    },
    rowSection: {
      head: {
        rowSlot: "",
      },
      body: {
        rowSlot: "bg-white border-t border-(--neutral-50) last:border-b",
      },
    },
  },
  defaultVariants: {
    rowSelected: false,
    align: "left",
    headerLabelActive: false,
    rowSection: "body",
  },
});

export type ProductsTableStyles = ReturnType<typeof productsTableStyles>;
