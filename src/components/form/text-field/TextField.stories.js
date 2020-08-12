import TextField from "./TextField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/TextField",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { TextField },
  props: {
    ...getDefaultFieldData(),
  },
  template: `<TextField :label="label" :placeholder="placeholder"/>`,
});

export const WithHint = () => ({
  components: { TextField },
  props: {
    ...getDefaultFieldData(),
    hint: {
      default: text("hint", "Be creative!"),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder" :hint="hint"/>`,
});

export const Invalid = () => ({
  components: { TextField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: boolean("error", true),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder" :error="error"/>`,
});

export const InvalidWithMessage = () => ({
  components: { TextField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: text("error", "Required field"),
    },
  },
  template: `<TextField :label="label" :placeholder="placeholder" :error="error"/>`,
});

export const Binding = () => ({
  components: { TextField },
  data() {
    return {
      text: "",
    };
  },
  template: `
  <div>
    <TextField v-model="text"/>
    <label>Text: {{text}}</label>
  </div>
  `,
});
