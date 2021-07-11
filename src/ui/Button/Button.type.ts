import React from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  type?: "submit" | "reset" | "button";
};
