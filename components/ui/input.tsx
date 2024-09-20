import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a class name utility

// Define the InputProps interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Input component using forwardRef
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type} // Default type to "text"
        className={cn("your-class-names", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

// Set a display name for better debugging in React DevTools
Input.displayName = "Input";

// Export the Input component
export { Input };
