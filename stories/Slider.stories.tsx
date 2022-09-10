import { ComponentMeta, ComponentStory } from '@storybook/react';
import Carousel from '../components/molecules/slider/Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = args => (
  <Carousel {...args} />
);
export const Slider = Template.bind({});
Slider.args = {
  numOfSlide: 5,
};
