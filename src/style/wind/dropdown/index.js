export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",

      // Shape
      "w-full md:w-56",
      "rounded-md",
      "shadow-sm",

      // Color and Background
      

      // States
      {
        "ring-1 ring-inset ring-gray-300 dark:ring-gray-700": !state.focused,
        "ring-2 ring-inset ring-primary-500 dark:ring-primary-400":
          state.focused,
      },

      // Misc
      "cursor-default",
      "select-none",
      { "opacity-60": props.disabled, "pointer-events-none": props.disabled },
    ],
  }),
  input: ({ props }) => ({
    class: [
 
      // Display
      "block",
      "flex-auto",

      // Color and Background
      "bg-transparent",
      "border-0",
      {
        "text-primary ": props.modelValue != undefined,
        "text-gray-300": props.modelValue == undefined,
      },
      "placeholder:text-gray-400 dark:placeholder:text-gray-300",

      // Sizing and Spacing

      //Shape
      "rounded-none",

      // Transitions
      "transition",
      "duration-200",

      // States
      "focus:outline-none focus:shadow-none",

      // Misc
      "relative",
      "cursor-pointer",
      "overflow-hidden overflow-ellipsis",
      "whitespace-nowrap",
      "appearance-none",
    ],
  }),
  trigger: {
    class: [
      //Font

      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "bg-transparent",
      "text-primary",

      // Size
      "w-12",

      // Shape
      "rounded-tr-md",
      "rounded-br-md",
    ],
  },
  panel: {
    class: [
      // Position
      "absolute top-0 left-0",
      "mt-2",

      // Shape
      "border-0",
      "rounded-md",
      "shadow-md",

      // Color
      "bg-gradient-to-tl from-secondary to-dark",
      "text-primary",
      "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
    ],
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[15rem]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class: "py-1 list-none m-0",
  },
  item: ({ context }) => ({
    class: [
      // Font
      { "font-normal": !context.selected, "font-bold": context.selected },

      // Position
      "relative",

      // Shape
      "border-0",
      "rounded-none",

      // Spacing
      "m-0",
      "py-2 px-4",

      // Color
      {
        "text-primary":
          !context.focused && !context.selected && !context.disabled,
      },
      {
        "text-primary":
          !context.focused && !context.selected && context.disabled,
      },
      {
        "text-primary":
          context.focused && !context.selected,
      },
      {
        "text-accent":
          context.focused && context.selected,
      },
      {
        "text-accent":
          !context.focused && context.selected,
      },

      //States
      "hover:bg-dark hover:text-accent ",
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ",

      // Misc
      { "pointer-events-none cursor-default": context.disabled },
      { "cursor-pointer": !context.disabled },
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",

      // Spacing
      "m-0",
      "py-2 px-4",

      // Color
      "text-primary",
      "bg-transparent",

      // Misc
      "cursor-auto",
    ],
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",

      // Spacing
      "py-2 px-4",

      // Color
      "text-primary",
      "bg-transparent",
    ],
  },
  header: {
    class: [
      // Spacing
      "p-0",
      "m-0",

      //Shape
      "rounded-tl-md",
      "rounded-tr-md",

      // Color
      "text-primary",
      "bg-transparent",
    ],
  },
  filtercontainer: {
    class: "relative",
  },
  filterinput: {
    class: [
      // Font
      "leading-none",

      // Sizing
      "py-1.5 px-3",
      "pr-7",
      "-mr-7",
      "w-full",

      //Color
      "text-primary bg-transparent",
      "placeholder:text-gray-400",
      "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",

      // Shape
      "border-0",
      "rounded-tl-md",
      "rounded-tr-md",
      "appearance-none",

      // States
      "focus:ring-2 focus:ring-inset focus:outline-none focus:outline-offset-0",
      "focus:ring-primary-600 dark:focus:ring-primary-500",

      // Misc
      "appearance-none",
    ],
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"],
  },
  clearicon: {
    class: [
      // Color
      "text-gray-500",

      // Position
      "absolute",
      "top-1/2",
      "right-2",

      // Spacing
      "-mt-2",
    ],
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
