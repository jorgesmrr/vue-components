import Modal from "./Modal";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Surface/Modal",
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Modal },
  data() {
    return { open: false };
  },
  template: `
  <div class="relative">
    <Modal v-model="open">
      Example
    </Modal>
    <button class="btn btn-primary" @click="open = !open">
      Open Modal
    </button>
  </div>`,
});
