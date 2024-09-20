<<<<<<< HEAD

=======
>>>>>>> 16996b0dd0a859f3a5b4be794002c13886c64f96
import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a class name utility

// Define the InputProps interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Input component using forwardRef
<<<<<<< HEAD
 const Input = React.forwardRef<HTMLInputElement, InputProps>(
=======
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
>>>>>>> 16996b0dd0a859f3a5b4be794002c13886c64f96
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type} // Default type to "text"
<<<<<<< HEAD
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
=======
        className={cn("your-class-names", className)}
>>>>>>> 16996b0dd0a859f3a5b4be794002c13886c64f96
        ref={ref}
        {...props}
      />
    );
  }
);

// Set a display name for better debugging in React DevTools
Input.displayName = "Input";

// Export the Input component
<<<<<<< HEAD
export { Input };
=======
export { Input };
>>>>>>> 16996b0dd0a859f3a5b4be794002c13886c64f96
