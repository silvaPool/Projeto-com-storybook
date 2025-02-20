import { SignupForm } from "../components/Formulario";

export default {
    title: 'Formulario',
    component: SignupForm,
};

const Template = args => <SignupForm {...args} />


export const Form = Template.bind({});

Form.args = {
    firstName: "Primeiro Nome",
    lastName: "Sobrenome",
    email: "Email",
};