import SelectField from "./SelectField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/SelectField",
  decorators: [withKnobs],
};

const optionsTemplate = `
<option>One</option>
<option>Two</option>
<option>Three</option>
`;

export const Default = () => ({
  components: { SelectField },
  props: {
    ...getDefaultFieldData(),
  },
  template: `<SelectField :label="label" :placeholder="placeholder">${optionsTemplate}</SelectField>`,
});

export const WithHint = () => ({
  components: { SelectField },
  props: {
    ...getDefaultFieldData(),
    hint: {
      default: text("hint", "Be creative!"),
    },
  },
  template: `<SelectField :label="label" :placeholder="placeholder" :hint="hint"/>`,
});

export const Invalid = () => ({
  components: { SelectField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: boolean("error", true),
    },
  },
  template: `<SelectField :label="label" :placeholder="placeholder" :error="error">${optionsTemplate}</SelectField>`,
});

export const InvalidWithMessage = () => ({
  components: { SelectField },
  props: {
    ...getDefaultFieldData(),
    error: {
      default: text("error", "Required field"),
    },
  },
  template: `<SelectField :label="label" :placeholder="placeholder" :error="error">${optionsTemplate}</SelectField>`,
});
