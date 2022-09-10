import { ComponentMeta } from '@storybook/react';
import LoginForm from '../components/templates/LoginForm';

export default {
  title: 'Template/Login',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template = () => <LoginForm />;
export const Login = Template.bind({});
