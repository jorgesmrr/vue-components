import ToolbarItem from "./ToolbarItem";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Navigation/ToolbarItem",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { ToolbarItem },
  props: {
    label: {
      default: text("label", "My field"),
    },
  },
  template: `<ToolbarItem :label="label"/>`,
});
