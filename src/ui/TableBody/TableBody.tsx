/* eslint-disable react/no-array-index-key */
import { memo } from "react";

import { classNames } from "utils";

import css from "./TableBody.module.scss";
import { TableBodyProps } from "./TableBody.type";

const TableBody = ({ className, rows = [[]] }: TableBodyProps) => {
  const tr = rows.map((row, index) => (
    <tr key={index}>
      {row.map((value, ind) => (
        <td key={ind}>{value}</td>
      ))}
    </tr>
  ));

  return <tbody className={classNames(css.TableBody, className)}>{tr}</tbody>;
};

export { TableBody };

export default memo(TableBody);
