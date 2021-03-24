<template>
  <nav class="flex items-center bg-white text-neutral-4 px-2 shadow-md" :class="{ busy: loading }">
    <div v-if="loading">Please wait...</div>
    <template v-else>
      <slot />
    </template>
  </nav>
</template>

<script>
export default {
  name: "Toolbar",

  props: {
    loading: Boolean
  }
};
</script>
