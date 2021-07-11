import { memo } from "react";

import { classNames } from "utils";

import css from "./Input.module.scss";
import { InputProps } from "./Input.type";

const Input = ({ className, label, onChange, value }: InputProps) => (
  <label className={classNames(css.Input, className)}>
    {label}
    <input onChange={onChange} value={value} />
  </label>
);

export { Input };

export default memo(Input);
