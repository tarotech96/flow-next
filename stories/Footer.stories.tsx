import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../components/templates/Footer';

export default {
  title: 'Template/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;
export const MyFooter = Template.bind({});
