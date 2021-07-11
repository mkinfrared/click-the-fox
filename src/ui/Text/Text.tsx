import { memo } from "react";

import { classNames } from "utils";

import css from "./Text.module.scss";
import { TextProps } from "./Text.type";

const Text = ({ className, children, onClick }: TextProps) => (
  <p className={classNames(css.Text, className)} onClick={onClick}>
    {children}
  </p>
);

export { Text };

export default memo(Text);
