import { TableBodyProps } from "ui/TableBody";
import { TableHeadProps } from "ui/TableHead";

export type TableProps = Pick<TableHeadProps, "headers"> &
  Pick<TableBodyProps, "rows"> & {
    /**
     * a string that will be applied as a css class to parent element
     */
    className?: string;
  };
