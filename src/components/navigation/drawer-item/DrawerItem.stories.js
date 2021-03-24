import DrawerItem from "./DrawerItem";

export default {
    title: "Navigation/DrawerItem",
    component: DrawerItem
};

const Template = (args, { argTypes }) => ({
    components: { DrawerItem },
    props: Object.keys(argTypes),
    template: `
  <ul>
    <DrawerItem :title="title"/>
  </ul>`
});

export const Default = Template.bind({});
Default.args = { title: "Item" };
