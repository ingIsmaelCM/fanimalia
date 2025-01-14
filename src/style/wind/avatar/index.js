export default {
  root: ({ props, parent }) => ({
    class: [
      // Font
      {
        "": props.size == null || props.size == "normal",
        "text-lg": props.size == "large",
        "text-xl": props.size == "xlarge",
      },

      // Alignments
      "inline-flex items-center justify-center",
      "shrink-0",
      "relative",

      // Sizes
      {
        "h-8 w-8": props.size == null || props.size == "normal",
        "w-12 h-12": props.size == "large",
        "w-16 h-16": props.size == "xlarge",
      },
      { "-ml-4": parent.instance.$style?.name == "avatargroup" },

      // Shapes
      {
        "rounded-lg": props.shape == "square",
        "rounded-full": props.shape == "circle",
      },
      { "border-2": parent.instance.$style?.name == "avatargroup" },

      // Colors
      "bg-gray-100 dark:bg-gray-700",
      {
        "border-white dark:border-gray-800":
          parent.instance.$style?.name == "avatargroup",
      },
    ],
  }),
  image: {
    class: "h-full w-full",
  },
};
