import DrawerItem from "./DrawerItem";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Navigation/DrawerItem",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { DrawerItem },
  props: {
    title: {
      default: text("title", "Item"),
    },
  },
  template: `
  <ul>
    <DrawerItem :title="title"/>
  </ul>`,
});
