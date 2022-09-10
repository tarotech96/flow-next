import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../components/templates/Header';

export default {
  title: 'Template/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;
export const MyHeader = Template.bind({});
MyHeader.args = {
  navLinks: [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/about',
      label: 'About',
    },
    {
      link: '/services',
      label: 'Serivices',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '/contact',
      label: 'Contact',
    },
  ],
};
