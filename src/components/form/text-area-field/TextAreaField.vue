<template>
  <FieldWrapper :for-attr="id" :label="label" :hint="hint" :error="error">
    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :class="getInputClasses"
      :disabled="disabled"
      @input="onInput"
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

  methods: {
    onInput(event) {
      if (this.error && this.autoCleanErrors) {
        this.$emit("update:error", null);
      }

      this.$emit("input", event.target.value);
    }
  }
};
</script>
