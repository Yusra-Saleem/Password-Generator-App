import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("your-class-names", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"

export { Input }
