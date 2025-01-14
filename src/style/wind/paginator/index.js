export default {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-center flex-wrap",

      // Spacing
      "px-4",

      // Shape
      "border-t",

      // Color
      "bg-gray-50 dark:bg-gray-700",
      "text-gray-500 dark:text-gray-200/60",
      "border-gray-200 dark:border-gray-700",
    ],
  },
  paginatorwrapper: {
    class: "mt-[-1px]",
  },
  firstpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Font
      " font-medium",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-t-2 border-transparent",

      // Size
      "min-w-[3rem] h-12 mt-[-1px]",

      // Color
      "text-gray-500 dark:text-gray-200/60",

      // State
      {
        "hover:border-gray-300 dark:hover:border-gray-200/30":
          !context.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "eval-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  previouspagebutton: ({ context }) => ({
    class: [
      "relative",

      // Font
      " font-medium",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-t-2 border-transparent",

      // Size
      "min-w-[3rem] h-12 mt-[-1px]",

      // Color
      "text-gray-500 dark:text-gray-200/60",

      // State
      {
        "hover:border-gray-300 dark:hover:border-gray-200/30":
          !context.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "eval-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  nextpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Font
      " font-medium",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-t-2 border-transparent",

      // Size
      "min-w-[3rem] h-12 mt-[-1px]",

      // Color
      "text-gray-500 dark:text-gray-200/60",

      // State
      {
        "hover:border-gray-300 dark:hover:border-gray-200/30":
          !context.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "eval-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  lastpagebutton: ({ context }) => ({
    class: [
      "relative",

      // Font
      " font-medium",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-t-2 border-transparent",

      // Size
      "min-w-[3rem] h-12 mt-[-1px]",

      // Color
      "text-gray-500 dark:text-gray-200/60",

      // State
      {
        "hover:border-gray-300 dark:hover:border-gray-200/30":
          !context.disabled,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "eval-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  pagebutton: ({ context }) => ({
    class: [
      "relative",

      // Font
      " font-medium",

      // Flex & Alignment
      "inline-flex items-center justify-center",

      // Shape
      "border-t-2",

      // Size
      "min-w-[3rem] h-12 mt-[-1px]",

      // Color
      {
        "text-gray-500 dark:text-gray-200/60 border-transparent":
          !context.active,
        "border-primary-500 dark:border-primary-400 text-primary-500 dark:text-gray-200":
          context.active,
      },

      // State
      {
        "hover:border-gray-300 dark:hover:border-gray-200/30":
          !context.disabled && !context.active,
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":
          !context.disabled,
      },

      // Transition
      "transition duration-200",

      // Misc
      "eval-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": context.disabled },
    ],
  }),
  rowperpagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",

        // Shape
        "h-8",
        "rounded-md",

        // Spacing
        "mx-2",

        // Color and Background
        "bg-transparent",

        // Transitions
        "transition-all",
        "duration-200",

        // States
        {
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":
            !state.focused,
        },

        // Misc
        "cursor-pointer",
        "select-none",
        {
          "opacity-60": props.disabled,
          "pointer-events-none": props.disabled,
          "cursor-default": props.disabled,
        },
      ],
    }),
    input: {
      class: [
        //Font
        "font-sans",
        "leading-6",
        "sm:",

        // Display
        "block",
        "flex-auto",
        "flex items-center",

        // Color and Background
        "bg-transparent",
        "border-0",
        "text-gray-800 dark:text-gray-200",

        // Sizing and Spacing
        "w-[1%]",
        "py-1.5 px-3 pr-0",

        //Shape
        "rounded-none",

        // Transitions
        "transition",
        "duration-200",

        // States
        "focus-visible:outline-none focus-visible:shadow-none",

        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none",
      ],
    },
    trigger: {
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
        "h-8",

        // Shape
        "rounded-tr-md",
        "rounded-br-md",
      ],
    },
    dropdownicon: {
      class: "",
    },
    panel: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-1",

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
          "text-gray-700 dark:text-gray-200":
            !context.focused && !context.selected,
        },
        {
          "bg-blue-300 dark:bg-primary-400 text-gray-200 dark:text-gray-700":
            context.focused && context.selected,
        },
        {
          "bg-transparent text-gray-700 dark:text-gray-200":
            !context.focused && context.selected,
        },

        //States
        "hover:bg-blue-300 dark:hover:bg-primary-400 hover:text-gray-800 dark:hover:text-gray-700",

        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap",
      ],
    }),
  },
  jumptopageinput: {
    root: {
      class: "inline-flex mx-2",
    },
    input: {
      root: {
        class: [
          "relative",

          //Font
          "font-sans",
          "leading-6",
          "sm:",

          // Display
          "block",
          "flex-auto",

          // Color and Background
          "bg-transparent",
          "border-0",
          "text-gray-800 dark:text-gray-200",
          "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
          // Sizing and Spacing
          "w-[1%] max-w-[3rem]",
          "py-1.5 px-3",

          //Shape
          "rounded-md",

          // Transitions
          "transition",
          "duration-200",

          // States
          "hover:border-primary-500 dark:hover:border-primary-400",
          "focus-visible:outline-none focus-visible:shadow-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500",
          // Misc
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none",
        ],
      },
    },
  },
  jumptopagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",

        // Shape
        "h-8",
        "rounded-md",

        // Spacing
        "mx-2",

        // Color and Background
        "bg-transparent",

        // Transitions
        "transition-all",
        "duration-200",

        // States
        {
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500":
            !state.focused,
        },

        // Misc
        "cursor-pointer",
        "select-none",
        {
          "opacity-60": props.disabled,
          "pointer-events-none": props.disabled,
          "cursor-default": props.disabled,
        },
      ],
    }),
    input: {
      class: [
        //Font
        "font-sans",
        "leading-6",
        "sm:",

        // Display
        "block",
        "flex-auto",
        "flex items-center",

        // Color and Background
        "bg-transparent",
        "border-0",
        "text-gray-800 dark:text-gray-200",

        // Sizing and Spacing
        "w-[1%]",
        "py-1.5 px-3 pr-0",

        //Shape
        "rounded-none",

        // Transitions
        "transition",
        "duration-200",

        // States
        "focus-visible:outline-none focus-visible:shadow-none",

        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none",
      ],
    },
    trigger: {
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
        "h-8",

        // Shape
        "rounded-tr-md",
        "rounded-br-md",
      ],
    },
    panel: {
      class: [
        // Position
        "absolute top-0 left-0",
        "mt-1",

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
          "text-gray-700 dark:text-gray-200":
            !context.focused && !context.selected,
        },
        {
          "bg-blue-300 dark:bg-primary-400 text-gray-200 dark:text-gray-700":
            context.focused && context.selected,
        },
        {
          "bg-transparent text-gray-700 dark:text-gray-200":
            !context.focused && context.selected,
        },

        //States
        "hover:bg-blue-300 dark:hover:bg-primary-400 hover:text-gray-800 dark:hover:text-gray-700",

        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap",
      ],
    }),
  },
};
