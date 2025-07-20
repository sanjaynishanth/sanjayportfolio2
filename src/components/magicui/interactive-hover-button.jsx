import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils"; // Ensure this utility exists

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary bg-background px-6 py-3 font-medium text-primary transition-all duration-300 hover:shadow-md",
          className
        )}
        {...props}
      >
        {/* Initial state (visible text) */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>

        {/* Hovered state (slide-in text + arrow) */}
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-2 text-white transition-all duration-300 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
