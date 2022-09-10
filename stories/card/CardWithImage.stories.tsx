import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardWithImage from '../../components/molecules/card/CardWithImage';

export default {
  title: 'Molecules/Card',
  component: CardWithImage,
} as ComponentMeta<typeof CardWithImage>;

const Template: ComponentStory<typeof CardWithImage> = args => (
  <CardWithImage {...args} />
);
export const CardImage = Template.bind({});
CardImage.args = {
  title: 'Card with image',
  content: 'This is card with image example',
};
