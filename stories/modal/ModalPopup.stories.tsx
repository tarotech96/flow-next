import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalPopup from '../../components/organisms/ModalPopup';

export default {
  title: 'Molecules/Modal',
  component: ModalPopup,
} as ComponentMeta<typeof ModalPopup>;

const Template: ComponentStory<typeof ModalPopup> = args => (
  <ModalPopup {...args} />
);
export const Popup = Template.bind({});
Popup.args = {
  confirmMessage: 'Are you sure you want to delete this product?',
};
