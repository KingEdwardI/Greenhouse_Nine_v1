import React from "react";
import { Table as RadixTable } from "@radix-ui/themes";
import "./DataTable.css";

export interface DataTableHeader {
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface DataTableProps {
  /**
   * Table headers configuration
   */
  headers: DataTableHeader[];
  /**
   * Table data rows (each row is an array of cell content)
   */
  rows: Array<Array<string | React.ReactNode>>;
  /**
   * Enable sticky header
   */
  stickyHeader?: boolean;
  /**
   * Enable glassmorphism effect
   */
  glass?: boolean;
  /**
   * Table variant
   */
  variant?: "ghost" | "surface";
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: "1" | "2" | "3";
  /**
   * Additional CSS class
   */
  className?: string;
}

export const DataTable = React.forwardRef<HTMLTableElement, DataTableProps>(
  (
    {
      headers,
      rows,
      stickyHeader = false,
      glass = false,
      variant = "surface",
      size = "2",
      className,
      ...props
    },
    ref
  ) => {
    const composedClassName = [
      "gn-DataTable",
      stickyHeader && "gn-DataTable--sticky",
      glass && "gn-DataTable--glass",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const containerClassName = [
      "gn-DataTable__container",
      stickyHeader && "gn-DataTable__container--sticky",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClassName}>
        <RadixTable.Root
          ref={ref}
          variant={variant}
          size={size}
          className={composedClassName}
          {...props}
        >
          <RadixTable.Header>
            <RadixTable.Row>
              {headers.map((header: DataTableHeader, index: number) => (
                <RadixTable.ColumnHeaderCell
                  key={index}
                  align={header.align || "left"}
                  style={header.width ? { width: header.width } : undefined}
                >
                  {header.label}
                </RadixTable.ColumnHeaderCell>
              ))}
            </RadixTable.Row>
          </RadixTable.Header>

          <RadixTable.Body>
            {rows.map(
              (row: Array<string | React.ReactNode>, rowIndex: number) => (
                <RadixTable.Row key={rowIndex}>
                  {row.map(
                    (cell: string | React.ReactNode, cellIndex: number) => (
                      <RadixTable.Cell
                        key={cellIndex}
                        align={headers[cellIndex]?.align || "left"}
                      >
                        {cell}
                      </RadixTable.Cell>
                    )
                  )}
                </RadixTable.Row>
              )
            )}
          </RadixTable.Body>
        </RadixTable.Root>
      </div>
    );
  }
);

DataTable.displayName = "DataTable";
