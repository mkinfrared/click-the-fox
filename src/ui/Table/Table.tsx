import { memo } from "react";

import TableBody from "ui/TableBody";
import TableHead from "ui/TableHead";
import { classNames } from "utils";

import css from "./Table.module.scss";
import { TableProps } from "./Table.type";

const Table = ({ className, headers, rows }: TableProps) => (
  <table className={classNames(css.Table, className)}>
    <TableHead headers={headers} />
    <TableBody rows={rows} />
  </table>
);

export { Table };

export default memo(Table);
