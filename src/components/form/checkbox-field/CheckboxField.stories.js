import CheckboxField from "./CheckboxField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Form/CheckboxField",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { CheckboxField },
  props: {
    label: {
      default: text("label", "My field"),
    },
  },
  template: `<CheckboxField :label="label"/>`,
});
