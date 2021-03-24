import Modal from "./Modal";

export default {
    title: "Surface/Modal",
    component: Modal
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
  </div>`
});
