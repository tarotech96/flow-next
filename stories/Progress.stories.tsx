import { ComponentStory } from '@storybook/react';
import { SpinnerProps } from 'flowbite-react';
import ProgressBar from '../components/atoms/animation/ProgressBar';
import Spinner from '../components/atoms/animation/Spinner';

export default {
  title: 'Atoms/Animation',
  components: [ProgressBar, Spinner],
};

const Template1: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
);
export const Progress = Template1.bind({});
Progress.args = {
  label: 'Uploading...',
  color: 'green',
};

const Template2: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;
export const Loading = Template2.bind({});
Loading.args = {
  color: 'success',
  size: 'md',
  label: 'Loading...',
};
