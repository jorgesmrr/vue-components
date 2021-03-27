<template>
    <div :class="field">
        <label v-if="label" :for="forAttr">
            {{ label }}
            <template v-if="hint">
                <br />
                <small class="field-hint">{{ hint }}</small>
            </template>
        </label>

        <slot />

        <small v-if="showErrorMessage" class="field-error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    name: "Field",

    props: {
        forAttr: String,
        label: String,
        hint: String,
        error: [String, Boolean]
    },

    computed: {
        showErrorMessage() {
            return this.error && typeof this.error === "string";
        }
    }
};
</script>
