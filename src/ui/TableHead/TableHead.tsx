import classnames from "classnames";
import { memo } from "react";

import css from "./TableHead.module.scss";
import { TableHeadProps } from "./TableHead.type";

const TableHead = ({ className, headers = [] }: TableHeadProps) => {
  // eslint-disable-next-line react/no-array-index-key
  const th = headers?.map((header, index) => <th key={index}>{header}</th>);

  return (
    <thead className={classnames(css.TableHead, className)}>
      <tr>{th}</tr>
    </thead>
  );
};

export { TableHead };

export default memo(TableHead);
