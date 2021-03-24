<template>
  <div :class="{ 'form-group': !!label || !!hint || showErrorMessage }">
    <label v-if="label || hint" :for="forAttr">
      {{ formattedLabel }}
      <br v-if="label && hint" />

      <small v-if="hint" class="text-neutral-6">{{ hint }}</small>
    </label>

    <slot />

    <small v-if="showErrorMessage" class="text-danger-3">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: "FieldWrapper",

  props: {
    forAttr: String,
    label: String,
    hint: String,
    error: [String, Boolean]
  },

  computed: {
    formattedLabel() {
      if (!this.label) return null;
      return this.label.trim().indexOf(":") > 0 ? this.label : `${this.label}:`;
    },

    showErrorMessage() {
      return this.error && typeof this.error === "string";
    }
  }
};
</script>
