<script>
export default {
  name: "Field",

  props: {
    id: String,
    name: String,
    disabled: Boolean,
    placeholder: String,
    inputClasses: String,

    value: {
      default: null,
    },

    autoCleanErrors: {
      type: Boolean,
      default: true,
    },

    // for field wrapper
    forAttr: String,
    label: String,
    hint: String,
    error: [String, Boolean],
  },

  computed: {
    getInputClasses() {
      let classes = this.inputClasses ? this.inputClasses.split(" ") : [];
      if (this.error) classes.push("border-danger-2");
      return classes;
    },
  },
};
</script>
