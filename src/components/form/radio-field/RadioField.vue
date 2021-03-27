<template>
    <label>
        <input
            type="radio"
            :id="id"
            :name="name"
            :checked="modelValue === value"
            :value="value"
            @change="changed($event)"
        />
        {{ label }}
    </label>
</template>

<script>
export default {
    name: "Radio",

    model: {
        prop: "modelValue",
        event: "change"
    },

    props: {
        id: String,
        name: String,
        disabled: Boolean,
        label: String,
        modelValue: {
            default: null
        },
        value: {
            default: ""
        }
    },

    methods: {
        changed(event) {
            if (event.target.checked) {
                this.$emit("change", this.value);
            }
        }
    }
};
</script>
