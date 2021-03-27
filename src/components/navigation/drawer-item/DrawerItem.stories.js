import DrawerItem from "./DrawerItem";

export default {
    title: "Navigation/DrawerItem",
    component: DrawerItem
};

const Template = (args, { argTypes }) => ({
    components: { DrawerItem },
    props: Object.keys(argTypes),
    template: `
    <DrawerItem :title="title"/>`
});

export const Default = Template.bind({});
Default.args = { title: "Item" };
