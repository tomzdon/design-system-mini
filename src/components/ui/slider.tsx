
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showThumbValue?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showThumbValue, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-[8px] bg-neutral-lighter"
    >
      <SliderPrimitive.Range className="absolute h-full bg-primary rounded-[8px]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full bg-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] focus-visible:outline-none disabled:pointer-events-none transition-colors">
      {showThumbValue && props.value && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 body-3-bold">
          {props.value[0]}
        </span>
      )}
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
