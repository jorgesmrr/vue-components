import Popover from "./Popover";

export default {
    title: "Surface/Popover",
    component: Popover
};

export const Default = () => ({
    components: { Popover },
    data() {
        return { open: false };
    },
    template: `
  <div class="relative">
    <button class="btn btn-primary" ref="anchor" @click="open = !open">
      Open Popover
    </button>    
    <Popover v-model="open" :anchor-element="$refs.anchor">
      Example
    </Popover>
  </div>`
});
