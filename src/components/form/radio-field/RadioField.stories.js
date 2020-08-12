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

export const Binding = () => ({
  components: { RadioField },
  data() {
    return {
      option: null,
    };
  },
  template: `
  <div>
    <div>
      <RadioField v-model="option" value="A" label="A"/>
      <RadioField v-model="option" value="B" label="B"/>
    </div>
    <label>Option {{option}}</label>
  </div>
  `,
});
