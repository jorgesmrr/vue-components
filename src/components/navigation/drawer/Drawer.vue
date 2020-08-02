<template>
  <div>
    <div v-if="open" class="fixed inset-0" @click="$emit('input', false)" />

    <div class="drawer" :class="{ open }" style="width: 250px">
      <h4 class="px-4">Menu</h4>

      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer",

  model: {
    prop: "open",
  },

  props: {
    open: Boolean,
  },
};
</script>
