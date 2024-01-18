"use client";

import cntl from "cntl";
import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const classes = {
  button: (className?: string): string => cntl`
  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
    ${className ?? ""}
  `
};

export const PrimaryButton = ({
  children,
  onClick,
  className
}: IButtonProps) => {
  return (
    <button className={classes.button(className)} onClick={onClick}>
      {children}
    </button>
  );
};
