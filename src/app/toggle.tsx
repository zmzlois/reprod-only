"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { Control, FieldValues, Path, useController } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 w-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

const CustomToggle = ({
  selected,
  onClick,
}: {
  selected: boolean
  onClick: () => void
}) => {
  return (
    <TogglePrimitive.Root
      onClick={onClick}
      className={selected ? "selected class" : "not selected class"}
    />
  )
}

const MultiToggle = <Vals extends FieldValues>({
  control,
  name,
  options,
}: {
  control: Control<Vals>
  name: Path<Vals>
  options: { name: string; id: string }[]
}) => {
  const { field, fieldState } = useController({ name, control })

function toggleState(id: string) {
    if (field.value === undefined) {
        // @ts-ignore
        field.onChange(new Array<string>([id]))
    } else {
        const val = field.value as Array<string>
        const newVal = [...val]
        if (val.includes(id)) {
            newVal.splice(newVal.indexOf(id), 1)
        } else {
            newVal.push(id)
        }
        // @ts-ignore
        field.onChange(newVal)
    }
}

  return (
    <div>
      {options.map((option) => {
        return (
            <CustomToggle
            key={option.id}
            onClick={() => {
              toggleState(option.id)
            }}
            selected={
              field.value &&
              (field.value as Array<string>).includes(option.id)
            }
          />
        )
      })}
    </div>
  )
}

export { Toggle, toggleVariants, MultiToggle, CustomToggle }
