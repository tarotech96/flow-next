import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultCard from '../../components/molecules/card/DefaultCard';

export default {
  title: 'Molecules/Card',
  component: DefaultCard,
} as ComponentMeta<typeof DefaultCard>;

const Template: ComponentStory<typeof DefaultCard> = args => (
  <DefaultCard {...args} />
);
export const CardDefault = Template.bind({});
CardDefault.args = {
  title: 'Default card',
  content: 'This is default card example',
};
