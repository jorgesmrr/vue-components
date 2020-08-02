import RadioField from "./RadioField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Form/RadioField",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { RadioField },
  props: {
    label: {
      default: text("label", "My field"),
    },
  },
  template: `<RadioField :label="label"/>`,
});
