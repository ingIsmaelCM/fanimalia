export default {
  navContainer: ({ props }) => ({
    class: [
      // Position
      "relative",
      // Misc
      { "overflow-hidden": props.scrollable },
    ],
  }),
  navContent: {
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden",
    ],
  },
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-none",

      // Colors
      "text-primary",
      "shadow-md",
    ],
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",

      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",

      // Size and Shape
      "h-full w-12",
      "rounded-none",

      // Colors
      "text-primary",
      "shadow-md",
    ],
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1 justify-start space-x-4",

      // Spacing
      "list-none",
      "p-0 m-0",

      // Colors
      "text-gray-900 dark:text-gray-200/80",
    ],
  },
  tabpanel: {

    header: ({ props }) => ({
      class: [
        // Spacing
        "m-0 p-0",

        // Misc
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ parent, context }) => ({
      class: [
        "relative",

        // Font
        "font-medium",
        "text-md",

        // Flexbox and Alignment
        "flex items-center",

        // Spacing
        "py-4 px-3",
        "-mb-[1px]",

        // Shape
        "border-b-2",
        "rounded-t-md",

        // Colors and Conditions
        {
          "bg-transparent text-primary border-transparent":
            parent.state.d_activeIndex !== context.index,
          "text-primary font-bold border-accent bg-accent":
            parent.state.d_activeIndex === context.index,

        },

        // States
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-inset",
        "focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        {
          "hover:bg-accent hover:border-secondary hover:text-secondary":
            parent.state.d_activeIndex !== context.index,
          
        },

        // Transitions
        "transition-all duration-500",

        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "eval-select-none",
        "whitespace-nowrap",
      ],
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap",
      ],
    },
    content: {
      class: [
        // Spacing
        "h-full w-full",
        // Shape
        "rounded-b-md",

        // Colors
        "text-primary",
        "border-0",
      ],
    },
  },
};
