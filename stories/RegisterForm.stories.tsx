import { ComponentMeta } from '@storybook/react';
import RegisterForm from '../components/templates/RegisterForm';

export default {
  title: 'Template/Register',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template = () => <RegisterForm />;
export const Register = Template.bind({});
