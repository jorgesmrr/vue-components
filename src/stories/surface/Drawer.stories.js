import Drawer from "../../components/surface/drawer/Drawer";

export default {
    title: "Surface/Drawer",
    component: Drawer
};

export const Default = () => ({
    components: { Drawer },
    data() {
        return { open: false };
    },
    template: `
  <div class="relative">
    <Drawer v-model="open">
      Content
    </Drawer>
    <button class="btn btn-primary" @click="open = !open">
      Open Drawer
    </button>
  </div>`
});
