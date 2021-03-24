import Drawer from "./Drawer";
import DrawerItem from "../drawer-item/DrawerItem";

export default {
    title: "Navigation/Drawer",
    component: Drawer
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
  </div>`
});
