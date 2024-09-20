import * as React from "react";
import { cn } from "@/lib/utils";



const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    // ...
  }
);

Input.displayName = "Input";

export { Input };
