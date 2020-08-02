import Popover from "./Popover";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Surface/Popover",
  decorators: [withKnobs],
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
  </div>`,
});
