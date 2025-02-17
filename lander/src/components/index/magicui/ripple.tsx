import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "../../lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  rippleBgColor?: string;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 50,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  rippleBgColor = "rgba(255, 255, 255, 0.25)",
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 30;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        // const borderStyle = i === numCircles - 1 ? "dashed" : "solid";

        return (
          <div
            key={i}
            className={`[--i: absolute animate-ripple rounded-full bg-foreground/25 shadow-xl${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                // borderStyle,
                // borderWidth: "1px",
                // borderColor: "#fff",
                backgroundColor: rippleBgColor,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
