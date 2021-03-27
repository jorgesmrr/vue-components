<template>
    <label>
        <input
            type="checkbox"
            :id="id"
            :name="name"
            :checked="isChecked"
            :disabled="disabled"
            @change="changed($event)"
        />
        {{ label }}
    </label>
</template>

<script>
export default {
    name: "Checkbox",

    model: {
        prop: "modelValue",
        event: "change"
    },

    props: {
        id: String,
        name: String,
        label: String,
        disabled: Boolean,
        modelValue: {
            default: false
        },
        value: {
            default: ""
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        }
    },

    computed: {
        isChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.indexOf(this.value) !== -1;
            } else {
                return this.modelValue === this.trueValue;
            }
        }
    },

    methods: {
        changed(event) {
            if (this.modelValue instanceof Array) {
                const newArray = [...this.modelValue];

                if (event.target.checked) {
                    newArray.push(this.value);
                } else {
                    newArray.splice(newArray.indexOf(this.value), 1);
                }

                this.$emit("change", newArray);
            } else {
                this.$emit(
                    "change",
                    event.target.checked ? this.trueValue : this.falseValue
                );
            }
        }
    }
};
</script>
