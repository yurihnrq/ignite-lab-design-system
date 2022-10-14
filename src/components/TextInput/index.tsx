import React, { InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface InputRootProps {
  children: React.ReactNode;
}

const InputRoot: React.FC<InputRootProps> = ({ children }) => {
  return (
    <div
      className="flex items-center gap-3 h-12 px-3 rounded bg-gray-800 w-full
      focus-within:ring-2 ring-cyan-300 transition-all"
    >
      {children}
    </div>
  );
};

export interface InputIconProps {
  children: React.ReactNode;
}

const InputIcon: React.FC<InputIconProps> = ({ children }) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="bg-transparent text-gray-100 text-xs placeholder:text-gray-400 flex-1 outline-none"
      {...props}
    />
  );
};

export const TextInput = {
  Root: InputRoot,
  Input,
  Icon: InputIcon,
};
