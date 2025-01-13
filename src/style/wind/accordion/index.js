export default {
  accordiontab: {
    header: ({ props }) => ({
      class: [
        // Sizing
      "!p-0",
        // State
        {
          "select-none pointer-events-none cursor-default opacity-60":
            props?.disabled,
        },
      ],
    }),
    headerAction: ({ context }) => ({
      class: [
        //Font
        "font-semibold",

        // Alignments
        "flex items-center justify-between flex-row-reverse",
        "relative",

        // Shape
        "rounded-md",

        // Color
        "bg-transparent",
        "text-gray-900 dark:text-gray-200",

        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-600 ring-inset dark:focus-visible:ring-primary-500", // Focus

        // Misc
        "cursor-pointer no-underline select-none",
      ],
    }),
    headerIcon: {
      class: "inline-block ml-2",
    },
    headerTitle: {
      class: "",
    },
    content: {
      class: [
        // Font

        // Spacing
        "!p-0",

        // Color
        "text-gray-600 dark:text-gray-200",
      ],
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass:
        "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass:
        "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0",
    },
  },
};
