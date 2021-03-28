import SelectField from "../../components/input/select-field/SelectField";
import Field from "../../components/input/field/Field";
import {
    defaultAttrs,
    getDefaultFieldData,
    getDefaultFieldDataWithError,
    getDefaultFieldDataWithErrorText,
    getDefaultFieldDataWithHint
} from "../../utils/stories/form";

export default {
    title: "Form/SelectField",
    component: SelectField
};

const Template = (args, { argTypes }) => ({
    components: { SelectField, Field },
    props: Object.keys(argTypes),
    data() {
        return {
            option: null
        };
    },
    template: `
        <Field ${defaultAttrs}>
        <SelectField v-model="option">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </SelectField>
        <label>Option {{ option }}</label>
        </Field>`
});

export const Default = Template.bind({});
Default.args = getDefaultFieldData();

export const WithHint = Template.bind({});
WithHint.args = getDefaultFieldDataWithHint();

export const Invalid = Template.bind({});
Invalid.args = getDefaultFieldDataWithError();

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = getDefaultFieldDataWithErrorText();
