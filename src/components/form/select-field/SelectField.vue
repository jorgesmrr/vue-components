<template>
  <FieldWrapper :for-attr="id" :label="label" :hint="hint" :error="error">
    <div>
      <select
        v-model="innerValue"
        :id="id"
        :placeholder="placeholder"
        :class="{ 'border-danger-2': error }"
        :disabled="disabled"
      >
        <option v-if="placeholder" :value="null" disabled>{{
          placeholder
        }}</option>
        <slot />
      </select>
    </div>
  </FieldWrapper>
</template>

<script>
import Field from "../field/Field";
import FieldWrapper from "../field-wrapper/FieldWrapper";

export default {
  name: "SelectField",

  extends: Field,

  components: { FieldWrapper },

  model: {
    event: "change",
  },

  data() {
    return {
      innerValue: this.value,
    };
  },

  watch: {
    value(to) {
      this.innerValue = to;
    },

    innerValue(to) {
      if (this.error && this.autoCleanErrors) {
        this.$emit("update:error", null);
      }

      this.$emit("change", to);
    },
  },
};
</script>
