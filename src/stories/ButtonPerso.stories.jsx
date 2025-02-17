import ButtonPerso from "../components/ButtonPerso";

export default {
  title: "ButtonPerso",
  component: ButtonPerso,
  argTypes: {
    handleClick: {
      action: "handleClick",
    },
  },
};

const Template = (args) => <ButtonPerso {...args} />;

export const ButtonP = Template.bind({});
ButtonP.args = {
  label: "Clique aqui",
};
