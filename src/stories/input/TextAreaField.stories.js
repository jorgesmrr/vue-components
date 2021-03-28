import TextAreaField from "../../components/input/text-area-field/TextAreaField";
import Field from "../../components/input/field/Field";
import {
    defaultAttrs,
    getDefaultFieldData,
    getDefaultFieldDataWithError,
    getDefaultFieldDataWithErrorText,
    getDefaultFieldDataWithHint
} from "../../utils/stories/form";

export default {
    title: "Form/TextAreaField",
    component: TextAreaField
};

const Template = (args, { argTypes }) => ({
    components: { TextAreaField, Field },
    props: Object.keys(argTypes),
    data() {
        return {
            text: ""
        };
    },
    template: `
    <Field ${defaultAttrs}>
    <TextAreaField v-model="text" ${defaultAttrs} />
    <label>Text: {{ text }}</label>
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
