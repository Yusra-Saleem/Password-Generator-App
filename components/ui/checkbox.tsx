"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type CheckedState = boolean | "indeterminate";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    checked?: CheckedState;
    onCheckedChange?: (checked: CheckedState) => void;
  }
>(({ className, checked, onCheckedChange, ...props }, ref) => (
  <CheckboxPrimitive.Root
  ref={ref}
  className={cn(
    "peer h-[1.2rem] w-[1.2rem] shrink-0 rounded-full border border-primary bg-blue-300  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-300 data-[state=checked]:text-slate-900 data-[state=checked]:font-bold",
    className
  )}
  checked={checked}
  onCheckedChange={onCheckedChange}
  {...props}
>
  <CheckboxPrimitive.Indicator
    className={cn("flex items-center justify-center text-current")}
  >
    <Check className="h-[0.9rem] w-[0.9rem] text-slate-900 font-bold" />
  </CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>

));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, type CheckedState };