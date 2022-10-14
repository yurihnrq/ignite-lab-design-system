import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Text } from "../Text";

export interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <RadixCheckbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
        <RadixCheckbox.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <Text size="sm">{label}</Text>
    </div>
  );
};
