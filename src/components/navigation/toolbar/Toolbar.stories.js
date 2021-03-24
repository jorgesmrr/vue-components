import Toolbar from "./Toolbar";
import ToolbarItem from "./../toolbar-item/ToolbarItem";

export default {
    title: "Navigation/Toolbar",
    component: Toolbar
};

const Template = (args, { argTypes }) => ({
    components: { Toolbar, ToolbarItem },
    props: Object.keys(argTypes),
    template: `<Toolbar>
    <ToolbarItem :title="label"/>
    <ToolbarItem :title="label"/>
    <ToolbarItem :title="label"/>
    </Toolbar>`
});

export const Default = Template.bind({});
Default.args = { label: "Item" };
