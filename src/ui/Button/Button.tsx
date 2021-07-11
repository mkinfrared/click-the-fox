import classnames from "classnames";
import { memo } from "react";

import css from "./Button.module.scss";
import { ButtonProps } from "./Button.type";

const Button = ({
  className,
  onClick,
  children,
  disabled = false,
  type = "button"
}: ButtonProps) => (
  <button
    className={classnames(css.Button, className)}
    disabled={disabled}
    onClick={onClick}
    type={type}
    data-testid="Button"
  >
    <p>{children}</p>
  </button>
);

export { Button };

export default memo(Button);
