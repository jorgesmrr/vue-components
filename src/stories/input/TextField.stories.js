import TextField from "../../components/input/text-field/TextField";
import Field from "../../components/input/field/Field";
import {
    defaultAttrs,
    getDefaultFieldData,
    getDefaultFieldDataWithError,
    getDefaultFieldDataWithErrorText,
    getDefaultFieldDataWithHint
} from "../../utils/stories/form";

export default {
    title: "Form/TextField",
    component: TextField
};

const Template = (args, { argTypes }) => ({
    components: { TextField, Field },
    props: Object.keys(argTypes),
    data() {
        return {
            text: ""
        };
    },
    template: `
    <Field ${defaultAttrs}>
    <TextField v-model="text" ${defaultAttrs} />
    <label>Text: {{ text }}</label>
    </Field>
  `
});

export const Default = Template.bind({});
Default.args = getDefaultFieldData();

export const WithHint = Template.bind({});
WithHint.args = getDefaultFieldDataWithHint();

export const Invalid = Template.bind({});
Invalid.args = getDefaultFieldDataWithError();

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = getDefaultFieldDataWithErrorText();
