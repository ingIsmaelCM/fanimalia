export default {
  root: {
    class: [
      "relative",

      // Flexbox
      "flex justify-between",
      "items-center",
      "gap-6",

      // Spacing
      "px-1 md:px-6",
      "min-h-[4rem]",

      // Shape
      "rounded-md",
      "shadow-md",

      // Color
      "ring-1 ring-inset ring-gray-800 ring-offset-0",
    ],
  },
  menu: ({ props }) => ({
    class: [
      // Flexbox
      "md:flex md:row-gap-2 md:col-gap-4 md:space-x-4",
      "items-center",
      "flex-wrap",
      "flex-col md:flex-row",
      { hidden: !props?.mobileActive, flex: props?.mobileActive },

      // Position
      "absolute md:relative",
      "top-full left-0",
      "md:top-auto md:left-auto",

      // Size
      "w-full md:w-auto",

      // Spacing
      "m-0 ",
      "py-2 px-1.5 md:py-0 md:p-0 md:py-1.5",
      "list-none",

      // Shape
      "shadow-md md:shadow-none",
      "border-0",
      "md:rounded-none rounded-md",

      // Color
      "bg-gradient-to-tl from-secondary to-dark bg-opacity-50 md:from-transparent md:to-transparent",

      // Misc
      "outline-none",
    ],
  }),
  menuitem: {
    class: "md:relative md:w-auto w-full static",
  },
  content: ({ props, context }) => ({
    class: [
      // Shape
      { "rounded-md": props.root },

      //  Colors
      {
        "text-primary":
          !context.focused && !context.active,
        "text-primary  bg-dark ":
          context.focused && !context.active
       
      },

      // Hover States
      {
        "hover:bg-dark hover:text-accent": !context.active,
        "hover:bg-gray hover:text-accent":
          context.active,
      },

      // Transitions
      "transition-all",
      "duration-200",
    ],
  }),
  action: ({ context }) => ({
    class: [
      "relative",

      // Font
      "md: font-medium",

      // Flexbox
      "flex",
      "items-center",

      // Spacing
      "py-2",
      "px-3",
      "my-1 md:my-0",

      // Size
      {
        "pl-5 md:pl-3": context.level === 1,
        "pl-7 md:pl-3": context.level === 2,
      },

      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden",
    ],
  }),
  icon: {
    class: "mr-2",
  },
  submenuicon: ({ props }) => ({
    class: [
      {
        "ml-auto md:ml-2": props.root,
        "ml-auto": !props.root,
      },
    ],
  }),
  submenu: ({ props }) => ({
    class: [
      // Size
      "w-full md:w-48",

      // Spacing
      "py-1",
      "m-0 ",
      "list-none",

      // Shape
      "shadow-none md:shadow-md",
      "border-0",

      // Position
      "static md:absolute",
      "z-10",
      { "md:absolute md:left-full md:top-0": props.level > 1 },

      // Color
    ],
  }),
  separator: {
    class: "border-t border-gray-200 dark:border-gray-600 my-1",
  },
  button: {
    class: [
      // Flexbox
      "flex md:hidden",
      "items-center justify-center",

      // Size
      "w-8",
      "h-8",

      // Shape
      "rounded-full",
      // Color
      "text-primary dark:text-gray-200",

      // States
      "hover:text-gray-600 dark:hover:text-gray-200/60",
      "hover:bg-gray-50 dark:hover:bg-gray-700",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400",

      // Transitions
      "transition duration-200 ease-in-out",

      // Misc
      "cursor-pointer",
      "no-underline",
    ],
  },
  end: {
    class: "ml-auto self-center",
  },
};
