<template>
  <a
    v-if="link"
    :href="link"
    class="px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded"
  >
    {{ title }}
  </a>
  <span v-else class="px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded">
    {{ title }}
  </span>
</template>

<script>
export default {
  name: "ToolbarItem",

  props: {
    title: {
      type: String,
      required: true,
    },
    link: String,
    route: String,
  },
};
</script>
