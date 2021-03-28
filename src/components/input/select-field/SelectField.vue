<template>
    <select
        v-model="innerValue"
        :id="id"
        :placeholder="placeholder"
        :class="{ 'input-error': error }"
        :disabled="disabled"
    >
        <option v-if="placeholder" :value="null" disabled
            >{{ placeholder }}
        </option>
        <slot />
    </select>
</template>

<script>
export default {
    name: "SelectField",

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

    model: {
        event: "change"
    },

    data() {
        return {
            innerValue: this.value
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
        }
    }
};
</script>
