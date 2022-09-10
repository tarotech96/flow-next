import { ComponentMeta, ComponentStory } from '@storybook/react';
import ECommerceCard from '../../components/molecules/card/ECommerceCard';

export default {
  title: 'Molecules/Card',
  component: ECommerceCard,
} as ComponentMeta<typeof ECommerceCard>;

const Template: ComponentStory<typeof ECommerceCard> = args => (
  <ECommerceCard {...args} />
);
export const CardECommerce = Template.bind({});
CardECommerce.args = {
  product: {
    name: 'Iphone14 Pro Max',
    price: 1199,
    image:
      'https://m-cdn.phonearena.com/images/article/141931-wide-two_350/Hands-on-impressions-of-iPhone-14-Pro-and-Pro-Max-shared-by-lesser-known-leaker.jpg?1660631277',
    description: 'Iphone14 Pro Max in colors pink, silver, and black',
    numStar: 5,
  },
};
