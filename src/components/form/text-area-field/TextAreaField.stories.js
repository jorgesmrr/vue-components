import TextAreaField from "./TextAreaField";
import {
    defaultAttrs,
    getDefaultFieldData,
    getDefaultFieldDataWithError,
    getDefaultFieldDataWithErrorText,
    getDefaultFieldDataWithHint
} from "../../../utils/stories/form";

export default {
    title: "Form/TextAreaField",
    component: TextAreaField
};

const Template = (args, { argTypes }) => ({
    components: { TextAreaField },
    props: Object.keys(argTypes),
    data() {
        return {
            text: ""
        };
    },
    template: `
    <div>
    <TextAreaField v-model="text"  ${defaultAttrs}/>
      <label>Text: {{text}}</label>
    </div>`
});

export const Default = Template.bind({});
Default.args = getDefaultFieldData();

export const WithHint = Template.bind({});
WithHint.args = getDefaultFieldDataWithHint();

export const Invalid = Template.bind({});
Invalid.args = getDefaultFieldDataWithError();

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = getDefaultFieldDataWithErrorText();
