import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className="bg-cyan-500 hover:bg-cyan-300 rounded py-4 px-3 font-semibold text-black text-sm w-full
      focus:ring-2 ring-cyan-500-50 transition-all"
      {...props}
    >
      {children}
    </Component>
  );
};
