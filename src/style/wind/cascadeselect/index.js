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
      "bg-gray-50 dark:bg-gray-700",

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
  label: ({ props }) => ({
    class: [
      //Font
      "font-sans",
      "leading-6",
      "sm:",

      // Flex & Alignment
      " flex flex-auto",

      // Sizing and Spacing
      "w-[1%]",
      "py-1.5 px-3",

      //Shape
      "rounded-none",

      // Color and Background
      "bg-transparent",
      "border-0",
      {
        "text-gray-800 dark:text-gray-200": props.modelValue,
        "text-gray-400 dark:text-gray-500": !props.modelValue,
      },
      "placeholder:text-gray-400 dark:placeholder:text-gray-300",

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
  dropdownbutton: {
    class: [
      //Font
      "sm:",

      // Flexbox
      "flex items-center justify-center",
      "shrink-0",

      // Color and Background
      "bg-transparent",
      "text-gray-500",

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
      "bg-gray-50 dark:bg-gray-700",
      "text-gray-800 dark:text-gray-200",
      "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
    ],
  },
  wrapper: {
    class: [
      // Sizing
      "max-h-[200px]",

      // Misc
      "overflow-auto",
    ],
  },
  list: {
    class: "py-1 list-none mx-1.5",
  },
  item: ({ context }) => ({
    class: [
      // Font
      "sm:",
      "leading-none",

      // Shape
      "border-0",
      "rounded-md",

      // Spacing
      "m-0",

      //  Colors
      {
        "text-gray-500 dark:text-gray-200/70":
          !context.focused && !context.active,
        "text-gray-500 dark:text-gray-200/70 bg-gray-200 dark:bg-black/70":
          context.focused && !context.active,
        "text-gray-900 dark:text-gray-200/80 bg-gray-50 dark:bg-black/70":
          context.focused && context.active,
        "text-gray-900 dark:text-gray-200/80 bg-gray-50 dark:bg-black/70":
          !context.focused && context.active,
      },

      // Hover States
      {
        "hover:bg-gray-50 dark:hover:bg-gray-800": !context.active,
        "hover:bg-gray-100 dark:hover:bg-black/40 text-gray-900 dark:text-gray-200/80":
          context.active,
      },

      // Transitions
      "transition-shadow",
      "duration-200",

      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  content: {
    class: [
      "relative",

      // Flexbox
      "flex",
      "items-center",

      // Spacing
      "py-2 px-4",

      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none",
    ],
  },
  groupicon: {
    class: [
      // Alignment
      "ml-auto",
    ],
  },
  sublist: {
    class: [
      // Size
      "w-full sm:w-48",

      // Spacing
      "p-1.5",
      "m-0",
      "list-none",

      // Shape
      "shadow-none sm:shadow-md",
      "border-0",

      // Position
      "static sm:absolute",
      "z-10",

      // Color
      "bg-gray-50 dark:bg-gray-700",
    ],
  },
  separator: {
    class: "border-t border-gray-200 dark:border-gray-600 my-1",
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
