import Drawer from "./Drawer";
import DrawerItem from "../drawer-item/DrawerItem";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Navigation/Drawer",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Drawer, DrawerItem },
  data() {
    return { open: false };
  },
  template: `
  <div class="relative">
    <Drawer v-model="open">
      <DrawerItem title="Item"/>
    </Drawer>
    <button class="btn btn-primary" @click="open = !open">
      Open Drawer
    </button>
  </div>`,
});
