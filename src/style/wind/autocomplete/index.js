export default {
  root: ({ props }) => ({
    class: [
      "relative",

      // Flex
      "inline-flex",

      // Size
      { "w-full": props.multiple },

      // Color
      "text-primary",

      //States
      {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  container: ({ props, state }) => ({
    class: [
      // Font
      "font-sans sm: leading-none",

      // Flex
      "flex items-center flex-wrap",
      "gap-1",

      // Spacing
      "m-0 list-none",
      "px-3 py-1",
      { "px-3 py-1.5": !props.multiple, "px-3 py-1": props.multiple },
      // Size
      "w-full",

      // Shape
      "appearance-none rounded-md",

      // Color
      "text-primary",
      "bg-transparent",
      "placeholder:text-gray-400 ",
      "shadow-sm",

      // States
      "focus:outline-none focus:outline-offset-0",
      {
        "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 ring-offset-0":
          !state.focused,
        "ring-2 ring-primary-500 dark:ring-primary-400": state.focused,
      },

      // Transition
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-text overflow-hidden",
    ],
  }),
  inputtoken: ({ props }) => ({
    class: [
      { "py-1.5 px-0": !props.multiple, "p-0.5": props.multiple },
      ,
      "inline-flex flex-auto",
    ],
  }),
  input: ({ props }) => ({
    class: [
      // Font
      "font-sans sm: leading-none",

      // Shape
      "appearance-none rounded-md",
      { "rounded-tr-none rounded-br-none": props.dropdown },
      { "outline-none shadow-none rounded-none": props.multiple },

      // Size
      { "w-full": props.multiple },

      // Spacing
      "m-0",
      { "py-1.5 px-3": !props.multiple, "p-0": props.multiple },

      // Colors
      "text-primary",
      {
        "bg-transparent dark:bg-gray-700": !props.multiple,
        "border border-gray-300 dark:border-gray-700": !props.multiple,
        "border-0 bg-transparent": props.multiple,
      },

      // States
      {
        "focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400":
          !props.multiple,
      },

      // Transition
      "transition-colors duration-200",
    ],
  }),
  token: {
    class: [
      // Flexbox
      "inline-flex items-center",

      // Spacing
      "py-0.5 px-3",

      // Shape
      "rounded-[1.14rem]",

      // Colors
      "text-primary",
      "bg-transparent",
    ],
  },
  label: {
    class: "leading-5",
  },
  removeTokenIcon: {
    class: [
      // Shape
      "rounded-md leading-6",

      // Spacing
      "ml-2",

      // Size
      "w-4 h-4",

      // Transition
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-pointer",
    ],
  },
  dropdownbutton: {
    root: {
      class: [
        "relative  leading-none",

        // Alignments
        "items-center inline-flex text-center align-bottom",

        // Shape
        "rounded-r-md",

        // Size
        "px-2.5 py-1.5",
        "-ml-[1px]",

        // Colors
        "text-primary",
        "bg-transparent",
        "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",

        // States
        "hover:bg-secondary",
        "focus:outline-none focus:outline-offset-0 focus:ring-1",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
      ],
    },
  },
  loadingicon: {
    class: [
      " leading-none text-gray-500 dark:text-gray-200",
      "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin",
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
      "max-h-[15rem]",
      "overflow-auto",

      // Color
      "bg-dark",
      "text-primary",
      "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
    ],
  },
  list: {
    class: "py-1 list-none m-0",
  },
  item: ({ context }) => ({
    class: [
      // Font
      "sm:",
      "leading-none",
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
          !context.focused && !context.selected,
      },
      {
        "bg-secondary text-accent":
          context.focused && !context.selected,
      },
      {
        "bg-secondary text-accent":
          context.focused && context.selected,
      },
      {
        "bg-transparent text-gray-700 dark:text-gray-200":
          !context.focused && context.selected,
      },

      //States
      "hover:bg-secondary hover:text-accent",

      // Misc
      "cursor-pointer",
      "overflow-hidden",
      "whitespace-nowrap",
    ],
  }),
  itemgroup: {
    class: [
      //Font
      "font-bold",
      "sm:",

      // Spacing
      "m-0",
      "py-2 px-4",

      // Color
      "text-gray-800 dark:text-gray-200",
      "bg-gray-50 dark:bg-gray-600/80",

      // Misc
      "cursor-auto",
    ],
  },
  emptymessage: {
    class: [
      // Font
      "leading-none",
      "sm:",

      // Spacing
      "py-2 px-4",

      // Color
      "text-primary",
      "bg-transparent",
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
