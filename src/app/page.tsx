"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { Control, FieldValues, Path, useController, useForm } from "react-hook-form";

const Toggle = ({
                  selected,
                  onClick,
                }: {
  selected: boolean;
  onClick: () => void;
}) => {
  return (
      <TogglePrimitive.Root
          onClick={onClick}
          className={selected ? "selected-class" : "unselected-class"}
      />
  );
};

const MultiToggle = <Vals extends FieldValues>({
                                                 control,
                                                 name,
                                                 options,
                                               }: {
  control: Control<Vals>;
  name: Path<Vals>;
  options: { name: string; id: string }[];
}) => {
  const { field, fieldState } = useController({ name, control });

  function toggleState(id: string) {
    if (field.value === undefined) {
      field.onChange(new Set<string>([id]));
    } else {
      const val = field.value as Set<string>;
      const newVal = new Set(val);
      if (val.has(id)) {
        newVal.delete(id);
      } else {
        val.add(id);
      }
      field.onChange(newVal);
    }
  }

  return (
      <div>
        {options.map((option) => {
          return (
              <Toggle
                  onClick={() => {
                    toggleState(option.id);
                  }}
                  selected={
                      field.value && (field.value as Set<string>).has(option.id)
                  }
              />
          );
        })}
      </div>
  );
};

export default function App() {

    const methods = useForm()
    return (
        <main className="App">
          <form>
            <MultiToggle
                control={methods.control}
                name="toggle"
                options={[
                    {
                        id: "1",
                        name: "Option 1",
                    },
                    {
                        id: "2",
                        name: "Option 2",
                    },
                    {
                        id: "3",
                        name: "Option 3",
                    },
                ]}
            />
          </form>
        </main>
    );
}