import TextAreaField from "./TextAreaField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/TextAreaField",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { TextAreaField },
  props: {
    ...getDefaultFieldData(),
  },
  template: `<TextAreaField :label="label" :placeholder="placeholder"/>`,
});

export const WithHint = () => ({
  components: { TextAreaField },
  props: {
    ...getDefaultFieldData(),
    hint: {
      default: text("hint", "Be creative!"),
    },
  },
  template: `<TextAreaField :label="label" :placeholder="placeholder" :hint="hint"/>`,
});

export const Invalid = () => ({
  components: { TextAreaField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: boolean("error", true),
    },
  },
  template: `<TextAreaField :label="label" :placeholder="placeholder" :error="error"/>`,
});

export const InvalidWithMessage = () => ({
  components: { TextAreaField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: text("error", "Required field"),
    },
  },
  template: `<TextAreaField :label="label" :placeholder="placeholder" :error="error"/>`,
});
