import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export const Checkbox: React.FC<RadixCheckbox.CheckboxProps> = (props) => {
  return (
    <RadixCheckbox.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};
