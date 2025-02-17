import ButtonAppBar from "../components/Header";

export default {
  title: 'HeaderItem',
  component: ButtonAppBar,
};

const Template = args => <ButtonAppBar {...args} />

export const Head = Template.bind({});
Head.args = {
    title: "Matheus",
};