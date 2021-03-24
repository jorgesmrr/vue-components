import TextField from "./TextField";
import {
    defaultAttrs,
    getDefaultFieldData,
    getDefaultFieldDataWithError,
    getDefaultFieldDataWithErrorText,
    getDefaultFieldDataWithHint
} from "../../../utils/stories/form";

export default {
    title: "Form/TextField",
    component: TextField
};

const Template = (args, { argTypes }) => ({
    components: { TextField },
    props: Object.keys(argTypes),
    data() {
        return {
            text: ""
        };
    },
    template: `
  <div>
    <TextField v-model="text" ${defaultAttrs}/>
    <label>Text: {{text}}</label>
  </div>
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
