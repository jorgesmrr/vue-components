<template>
    <input
        ref="inputFieldRef"
        :id="id"
        :name="name"
        :type="type"
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
    name: "TextField",

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
        },

        type: {
            type: String,
            default: "text"
        }
    },

    methods: {
        onInput() {
            if (this.error && this.autoCleanErrors) {
                this.$emit("update:error", null);
            }

            this.$emit("input", event.target.value);
        }
    }
};
</script>
