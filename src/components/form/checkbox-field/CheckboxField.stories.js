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

export const Binding = () => ({
  components: { CheckboxField },
  data() {
    return {
      checked: false,
    };
  },
  template: `
  <div>
    <div>
      <CheckboxField v-model="checked" label="Text"/>
    </div>
    <label v-if="checked">Checked</label>
    <label v-else>Unchecked</label>
  </div>
  `,
});
