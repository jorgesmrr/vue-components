<template>
  <FieldWrapper :for-attr="id" :label="label" :hint="hint" :error="error">
    <textarea
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="getInputClasses"
      :disabled="disabled"
      v-on="eventListeners"
      @change="$emit('change', $event)"
    />
  </FieldWrapper>
</template>

<script>
import FieldWrapper from "../field-wrapper/FieldWrapper";
import Field from "../field/Field";

export default {
  name: "TextAreaField",

  extends: Field,

  components: { FieldWrapper },

  props: {
    type: {
      type: String,
      default: "text",
    },
  },

  methods: {
    onInput(event) {
      if (this.error && this.autoCleanErrors) {
        this.$emit("update:error", null);
      }

      this.$emit("input", event.target.value);
    },
  },
};
</script>
