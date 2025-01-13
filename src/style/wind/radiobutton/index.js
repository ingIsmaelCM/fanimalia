export default {
  root: {
    class: [
      "relative",

      // Flexbox & Alignment
      "inline-flex",
      "align-bottom",

      // Size
      "w-4 h-4",

      // Misc
      "cursor-default",
      "select-none",
    ],
  },
  box: ({ props }) => ({
    class: [
      // Flexbox
      "flex justify-center items-center",

      // Size
      "w-4 h-4",
      "",
      "font-medium",

      // Shape
      "border-2",
      "rounded-full",

      // Transition
      "transition duration-200 ease-in-out",

      // Colors
      {
        "text-gray-700 dark:text-gray-200":
          props.value !== props.modelValue && props.value !== undefined,
        "bg-gray-50 dark:bg-gray-700":
          props.value !== props.modelValue && props.value !== undefined,
        "border-gray-300 dark:border-gray-700":
          props.value !== props.modelValue && props.value !== undefined,
        "border-blue-500 bg-blue-500 dark:border-blue-400":
          props.value == props.modelValue && props.value !== undefined,
      },

      // States
      {
        "outline-none outline-offset-0": !props.disabled,
        "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-gray-0 dark:focus-visible:ring-offset-gray-800 peer-focus-visible:ring-blue-500 dark:peer-focus-visible:ring-blue-400":
          !props.disabled,
        "opacity-60 cursor-default": props.disabled,
      },
    ],
  }),
  input: {
    class: [
      "peer",

      // Size
      "w-full ",
      "h-full",

      // Position
      "absolute",
      "top-0 left-0",
      "z-10",

      // Spacing
      "p-0",
      "m-0",

      // Shape
      "opacity-0",
      "rounded-md",
      "outline-none",
      "border-2 border-gray-300 dark:border-gray-700",

      // Misc
      "appareance-none",
      "cursor-default",
    ],
  },
  icon: {
    class: "hidden",
  },
};
