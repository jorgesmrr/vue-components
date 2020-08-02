import { text } from "@storybook/addon-knobs";

export const getDefaultFieldData = () => ({
  label: {
    default: text("label", "My field"),
  },
  placeholder: {
    default: text("placeholder", "Type something here..."),
  },
});
