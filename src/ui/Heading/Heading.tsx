import classnames from "classnames";
import React from "react";

import css from "./Heading.module.scss";
import { HeadingProps } from "./Heading.type";

const Heading = ({ className, children, variant = "h3" }: HeadingProps) => {
  switch (variant) {
    case "h1":
      return <h1 className={classnames(css.Heading, className)}>{children}</h1>;
    case "h2":
      return <h2 className={classnames(css.Heading, className)}>{children}</h2>;
    case "h3":
      return <h3 className={classnames(css.Heading, className)}>{children}</h3>;
    case "h4":
      return <h4 className={classnames(css.Heading, className)}>{children}</h4>;
    case "h5":
      return <h5 className={classnames(css.Heading, className)}>{children}</h5>;
    default:
      return <h6 className={classnames(css.Heading, className)}>{children}</h6>;
  }
};

export { Heading };

export default React.memo(Heading);
