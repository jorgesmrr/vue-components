import CheckboxField from "./CheckboxField";

export default {
    title: "Form/CheckboxField",
    component: CheckboxField
};

export const Default = () => ({
    components: { CheckboxField },
    data() {
        return {
            checked: false
        };
    },
    template: `
  <div>
    <div>
      <CheckboxField v-model="checked" label="Text"/>
    </div>
    <label v-if="checked">Checked</label>
    <label v-else>Unchecked</label>
  </div>
  `
});
