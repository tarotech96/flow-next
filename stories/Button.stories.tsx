import Button, { ButtonPropsType } from '../components/atoms/button/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Buttons',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonPropsType) => (
  <Button {...args} />
);
// Default Button
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  buttonLabel: 'Default',
  color: '',
  size: 'sm',
  handleFn: () => alert('This is default button'),
};

// Gray Button
export const GrayButton = Template.bind({})
GrayButton.args = {
  buttonLabel: 'Gray',
  color: 'gray',
  size: 'md',
  handleFn: () => alert('This is gray button'),
  gradientMonochrome: 'sucess'
}

// Dark Button
export const DarkButton = Template.bind({})
DarkButton.args = {
  buttonLabel: 'Dark',
  color: 'dark',
  size: 'lg',
  handleFn: () => alert('This is dark button'),
  gradientMonochrome: 'teal'
}

// Success Button
export const SuccessButton = Template.bind({})
SuccessButton.args = {
  buttonLabel: 'Success',
  color: 'success',
  size: 'lg',
  handleFn: () => alert('This is success button'),
  gradientDuoTone: 'purpleToBlue'
}

// Failure Button
export const FailureButton = Template.bind({})
FailureButton.args = {
  buttonLabel: 'Failure',
  color: 'failure',
  size: 'md',
  handleFn: () => alert('This is failure button'),
  gradientDuoTone: 'redToYellow'
}

// Warning Button
export const WarningButton = Template.bind({})
WarningButton.args = {
  buttonLabel: 'Warning',
  color: 'warning',
  size: 'lg',
  handleFn: () => alert('This is warning button'),
  gradientDuoTone: 'tealToLime'
}

