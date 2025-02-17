export default {
  root: ({ props }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "max-w-full",
      "relative",
      "shadow-sm",
      "rounded-md",
      // Misc
      {
        "opacity-40 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  input: ({ props }) => ({
    class: [
      // Display
      "flex flex-auto",

      // Font
      "font-sans leading-none  sm:",

      // Colors
      "text-primary",
      "placeholder:text-gray-400 dark:placeholder:text-gray-300",
      "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 ring-offset-0",

      // Spacing
      "m-0 py-1.5 px-3",
      "-ml-[1px]",

      // Shape
      "appearance-none",
      { "rounded-md": !props.showIcon || props.iconDisplay == "input" },
      {
        "rounded-l-md  flex-1 pr-9 ":
          props.showIcon && props.iconDisplay !== "input",
      },
      {
        "rounded-md flex-1 pr-9":
          props.showIcon && props.iconDisplay === "input",
      },

      // Transitions
      "transition-colors",
      "duration-200",

      // States
      "outline-none focus:ring-primary-500 dark:focus:ring-primary-400",
    ],
  }),
  inputicon: {
    class: [
      "sm:",
      "absolute top-[50%] -mt-2",
      "text-gray-600 dark:text-gray-200",
      "right-[.75rem]",
    ],
  },
  dropdownbutton: {
    root: {
      class: [
        "relative ",

        // Alignments
        "items-center inline-flex text-center align-bottom",

        // Shape
        "rounded-r-md",

        // Size
        "px-2.5 py-2 ",

        // Colors
        "text-gray-600 dark:text-gray-100",
        "bg-gray-100 dark:bg-gray-700",
        "ring-1 ring-inset ring-gray-300 dark:ring-gray-700",

        // States
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "focus:outline-none focus:outline-offset-0 focus:ring-1",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
      ],
    },
  },
  panel: ({ props }) => ({
    class: [
      // Display & Position
      {
        absolute: !props.inline,
        "inline-block": props.inline,
      },

      // Size
      { "w-auto py-2 ": !props.inline },
      { "min-w-[80vw] w-auto p-2 ": props.touchUI },
      { "p-2 min-w-full": props.inline },

      // Shape
      "rounded-lg",
      {
        "shadow-md ring-1": !props.inline,
      },

      // Colors
      "bg-gray-50 dark:bg-gray-700",
      "ring-gray-200 dark:ring-gray-700",

      //misc
      { "overflow-x-auto": props.inline },
    ],
  }),
  datepickerMask: {
    class: [
      "fixed top-0 left-0 w-full h-full",
      "flex items-center justify-center",
      "bg-black bg-opacity-90",
    ],
  },
  header: ({ props }) => ({
    class: [
      //Font
      "font-semibold text-md",

      // Flexbox and Alignment
      "flex items-center justify-between",

      // Spacing
      "m-0",
      {
        "py-2 pl-2 pb-4": !(props.numberOfMonths > 1),
        "py-2 pb-4": props.numberOfMonths > 1,
      },

      // Shape
      "rounded-t-md",

      // Colors
      "text-gray-700 dark:text-gray-200",
      "bg-gray-50 dark:bg-gray-700",
    ],
  }),
  previousbutton: ({ props }) => ({
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      {
        " order-2": !(props.numberOfMonths > 1),
        "order-1": props.numberOfMonths > 1,
      },
      // Size
      "p-1.5 m-0",

      // Colors
      "text-gray-500 dark:text-gray-200/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-gray-700 dark:hover:text-gray-200",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  }),
  title: ({ props }) => ({
    class: [
      // Text
      "leading-6",
      "my-0",
      "order-1",
      {
        "mr-auto": !(props.numberOfMonths > 1),
        " mx-auto": props.numberOfMonths > 1,
      },
    ],
  }),
  monthTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",

      // Colors
      "text-gray-700 dark:text-gray-200",

      // Transitions
      "transition duration-200",

      // Spacing
      "m-0 mr-2",

      // States
      "hover:text-primary-500 dark:hover:text-primary-400",

      // Misc
      "cursor-pointer",
    ],
  },
  yearTitle: {
    class: [
      // Font
      "text-base leading-6",
      "font-semibold",

      // Colors
      "text-gray-700 dark:text-gray-200",

      // Transitions
      "transition duration-200",

      // Spacing
      "m-0",

      // States
      "hover:text-primary-500 dark:hover:text-primary-400",

      // Misc
      "cursor-pointer",
    ],
  },
  nextbutton: ({ props }) => ({
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center order-3",
      {
        " order-3": !(props.numberOfMonths > 1),
        "order-1": props.numberOfMonths > 1,
      },

      // Size
      "p-1.5 m-0",

      // Colors
      "text-gray-500 dark:text-gray-200/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-gray-700 dark:hover:text-gray-200",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  }),
  table: {
    class: [
      // Size & Shape
      "w-full",

      // Spacing
      "m-0 my-2",
    ],
  },
  tableheadercell: {
    class: [
      // Spacing
      "p-0 md:p-2",
    ],
  },
  tablebodyrow: {
    class: ["border-b border-gray-200 dark:border-gray-700 last:border-b-0"],
  },
  weekheader: {
    class: [
      "leading-6  font-normal",
      "text-gray-600 dark:text-gray-200/70",
      "opacity-40 cursor-default",
      "mb-2",
    ],
  },
  weeknumber: {
    class: [
      "text-gray-600 dark:text-gray-200/70 font-normal",
      "opacity-40 cursor-default",
    ],
  },
  weekday: {
    class: [
      // Colors
      "text-gray-500 dark:text-gray-200/60 font-normal",
    ],
  },
  day: {
    class: [
      // Spacing
      "p-0 md:p-2",
    ],
  },
  weeklabelcontainer: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",

      // Shape & Size
      "w-10 h-10",
      "rounded-full",
      "border-transparent border",

      // Colors
      {
        "text-gray-600 dark:text-gray-200/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-primary-500  dark:text-primary-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
      {
        "hover:bg-gray-100 dark:hover:bg-gray-700": !context.disabled,
      },
      {
        "opacity-40 cursor-default": context.disabled,
        "cursor-pointer": !context.disabled,
      },
    ],
  }),
  daylabel: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",

      // Shape & Size
      "w-8 h-8",
      "rounded-full",

      // Colors
      {
        "text-gray-200 bg-gray-700 dark:text-gray-900 dark:bg-gray-50":
          context.date.today && !context.selected && !context.disabled,
        "text-gray-600 dark:text-gray-200/70 bg-transparent":
          !context.selected && !context.disabled && !context.date.today,
        "text-primary-500 dark:text-primary-400":
          context.selected && !context.disabled && !context.date.today,
        "text-primary-200 dark:text-primary-600 bg-gray-700 dark:bg-gray-50":
          context.selected && !context.disabled && context.date.today,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      {
        "hover:bg-gray-100 dark:hover:bg-gray-600/80": !context.disabled,
        "hover:bg-gray-700 dark:hover:bg-gray-200":
          !context.disabled && context.date.today,
      },

      {
        "opacity-40 cursor-default": context.disabled,
        "cursor-pointer": !context.disabled,
      },
    ],
  }),
  monthpicker: {
    class: [
      // Spacing
      "my-2",
    ],
  },
  month: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",

      // Shape
      "rounded-md",

      // Colors
      {
        "text-gray-600 dark:text-gray-200/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-primary-500 dark:text-primary-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-gray-100 dark:hover:bg-gray-600/80",

      // Misc
      "cursor-pointer",
    ],
  }),
  yearpicker: {
    class: [
      // Spacing
      "my-2",
    ],
  },
  year: ({ context }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "w-1/3",
      "px-2.5 py-1.5",
      "mt-1",
      "text-md leading-none",

      // Shape
      "rounded-md",

      // Colors
      {
        "text-gray-600 dark:text-gray-200/70 bg-transparent":
          !context.selected && !context.disabled,
        "text-primary-500 dark:text-primary-400":
          context.selected && !context.disabled,
      },

      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      "hover:bg-gray-100 dark:hover:bg-gray-600/80",

      // Misc
      "cursor-pointer",
    ],
  }),
  timepicker: {
    class: [
      // Flexbox
      "flex",
      "justify-center items-center",

      // Spacing
      "p-1.5",
    ],
  },
  separatorcontainer: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  separator: {
    class: [
      // Text
      "text-xl",
    ],
  },
  hourpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  minutepicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  secondPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  ampmpicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",

      // Spacing
      "px-2",
    ],
  },
  incrementbutton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "p-1.5 m-0",

      // Colors
      "text-gray-500 dark:text-gray-200/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-gray-700 dark:hover:text-gray-200",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  },
  decrementbutton: {
    class: [
      "relative",

      // Flexbox and Alignment
      "inline-flex items-center justify-center",

      // Size
      "p-1.5 m-0",

      // Colors
      "text-gray-500 dark:text-gray-200/60",
      "border-0",
      "bg-transparent",

      // States
      "hover:text-gray-700 dark:hover:text-gray-200",

      // Misc
      "cursor-pointer overflow-hidden",
    ],
  },
  groupcontainer: {
    class: [
      // Flexbox
      "flex",
    ],
  },
  group: {
    class: [
      // Flexbox and Sizing
      "flex-1",

      // Borders
      "border-l",
      "border-gray-200 dark:border-gray-700",

      // Spacing
      "pr-0.5",
      "pl-0.5",
      "pt-0",
      "pb-0",

      // Pseudo-Classes
      "first:pl-0",
      "first:border-l-0",
    ],
  },
  buttonbar: {
    class: [
      // Flexbox
      "flex justify-between items-center",

      // Spacing
      "pt-2.5 pb-1.5 px-0",

      // Shape
      "border-t border-gray-200 dark:border-gray-700",
    ],
  },
  todaybutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",

        // Spacing
        "px-2.5 py-1.5  leading-none",

        // Shape
        "rounded-md",

        // Colors
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",

        // Transitions
        "transition-colors duration-200 ease-in-out",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:bg-primary-300/20",

        // Misc
        "cursor-pointer",
      ],
    },
  },
  clearbutton: {
    root: {
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",

        // Spacing
        "px-2.5 py-1.5  leading-none",

        // Shape
        "rounded-md",

        // Colors
        "bg-transparent border-transparent",
        "text-primary-500 dark:text-primary-400",

        // Transitions
        "transition-colors duration-200 ease-in-out",

        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-2 ring-inset",
        "focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:bg-primary-300/20",

        // Misc
        "cursor-pointer",
      ],
    },
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass:
      "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0",
  },
};
