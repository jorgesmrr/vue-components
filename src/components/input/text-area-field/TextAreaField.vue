<template>
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
</template>

<script>
export default {
    name: "TextAreaField",

    props: {
        id: String,
        name: String,
        disabled: Boolean,
        placeholder: String,

        value: {
            default: null
        },

        autoCleanErrors: {
            type: Boolean,
            default: true
        }
    },

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
