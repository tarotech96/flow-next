import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../components/atoms/Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;
export const AvatarProfile = Template.bind({});
AvatarProfile.args = {
  img: 'https://haikyuu-merch.net/wp-content/uploads/2021/06/shoyo-hinata.jpg',
};
