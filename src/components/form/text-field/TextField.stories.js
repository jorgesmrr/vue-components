import TextField from "./TextField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "TextField",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { TextField },
  props: {
    label: {
      default: text("label", "My field"),
    },
    placeholder: {
      default: text("placeholder", "Type something here..."),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder"/>`,
});

export const Invalid = () => ({
  components: { TextField },
  props: {
    label: {
      default: text("label", "My field"),
    },
    placeholder: {
      default: text("placeholder", "Type something here..."),
    },
    error: {
      default: boolean("error", true),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder" :error="error"/>`,
});

export const InvalidWithMessage = () => ({
  components: { TextField },
  props: {
    label: {
      default: text("label", "My field"),
    },
    placeholder: {
      default: text("placeholder", "Type something here..."),
    },
    error: {
      default: text("error", "Required field"),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder" :error="error"/>`,
});
