export default {
  root: ({ props }) => ({
    class: [
      // Spacing and Shape
      "my-2 mx-0",
      "rounded-md",
      "ring-1 ring-inset ring-gray-200 dark:ring-gray-700 ring-offset-0",

      // Colors
      "bg-gray-50 dark:bg-gray-700",

      {
        "text-blue-500 dark:text-blue-300": props.severity == "info",
        "text-green-500 dark:text-green-300": props.severity == "success",
        "text-orange-500 dark:text-orange-300": props.severity == "warn",
        "text-red-500 dark:text-red-300": props.severity == "error",
      },
    ],
  }),
  wrapper: {
    class: [
      // Flexbox
      "flex items-center",

      // Spacing
      "p-4",
    ],
  },
  icon: {
    class: [
      // Sizing and Spacing
      "w-5 h-5",
      "mr-3 shrink-0",
    ],
  },
  text: {
    class: [
      // Font and Text
      " leading-none",
      "font-medium",
    ],
  },
  button: ({ props }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",

      // Size
      "w-6 h-6",

      // Spacing and Misc
      "ml-auto relative",

      // Shape
      "rounded-full",

      // Colors
      "bg-transparent",
      "text-gray-700 dark:text-gray-200/80",

      // Transitions
      "transition duration-200 ease-in-out",

      // States
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "outline-none focus:ring-1 focus:ring-inset",
      "focus:ring-primary-500 dark:focus:ring-primary-400",

      // Misc
      "overflow-hidden",
    ],
  }),
  closeicon: {
    class: [
      // Sizing and Spacing
      "w-3 h-3",
      "shrink-0",
    ],
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0",
  },
};
