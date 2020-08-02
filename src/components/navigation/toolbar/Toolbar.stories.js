import Toolbar from "./Toolbar";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Navigation/Toolbar",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Toolbar },
  props: {
    label: {
      default: text("label", "My field"),
    },
  },
  template: `<Toolbar :label="label"/>`,
});
