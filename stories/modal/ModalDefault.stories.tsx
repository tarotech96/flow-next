import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalDefault from '../../components/organisms/ModalDefault';

export default {
  title: 'Molecules/Modal',
  components: ModalDefault,
} as ComponentMeta<typeof ModalDefault>;

const Template: ComponentStory<typeof ModalDefault> = args => (
  <ModalDefault {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: 'Terms of Sevice',
  text1:
    'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.',
  text2:
    'The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.',
};
