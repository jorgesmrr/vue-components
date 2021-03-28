import RadioField from "../../components/input/radio-field/RadioField";

export default {
    title: "Form/RadioField",
    component: RadioField
};

export const Default = () => ({
    components: { RadioField },
    data() {
        return {
            option: null
        };
    },
    template: `
  <div>
    <div>
      <RadioField v-model="option" value="A" label="A"/>
      <RadioField v-model="option" value="B" label="B"/>
    </div>
    <label>Option {{option}}</label>
  </div>
  `
});
