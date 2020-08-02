<template>
  <div class="modal" :class="{ open: show }" @mousedown="handleClick($event)">
    <div class="modal-content">
      <Scrollable class="card overflow-hidden">
        <template v-slot:fixed-top v-if="$slots.title">
          <div class="card-block flex">
            <span class="card-title"><slot name="title"/></span>
            <span
              class="fas fa-times ml-auto cursor-pointer"
              @click.prevent="dismiss"
            />
          </div>
          <slot name="fixed-top" />
        </template>

        <slot />

        <template v-slot:fixed-bottom>
          <slot name="fixed-bottom" />
        </template>
      </Scrollable>
    </div>
  </div>
</template>

<script>
import Scrollable from "../scrollable/Scrollable";

export default {
  name: "Modal",

  components: { Scrollable },

  model: {
    prop: "show",
    event: "change",
  },

  props: {
    show: {
      type: Boolean | Object,
      default: false,
    },

    allowDismiss: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    dismiss() {
      if (!this.allowDismiss) return;

      this.$emit("dismiss");
      this.$emit("change", null);
    },

    handleClick(event) {
      if (
        event.target.classList.contains("modal") ||
        event.target.classList.contains("modal-content")
      ) {
        event.preventDefault();
        event.stopPropagation();
        this.dismiss();
      }
    },
  },
};
</script>
