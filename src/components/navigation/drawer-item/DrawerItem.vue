<template>
  <li class="drawer-item">
    <a class="block px-4 py-2" :href="link">
      {{ title }}
    </a>
  </li>
</template>

<script>
export default {
  name: "DrawerItem",

  props: {
    title: {
      type: String,
      required: true,
    },
    link: String
  },
};
</script>
