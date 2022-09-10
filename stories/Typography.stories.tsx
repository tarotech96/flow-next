import Heading1 from '../components/atoms/typography/Heading1'
import Heading2 from '../components/atoms/typography/Heading2'
import Heading3 from '../components/atoms/typography/Heading3'
import Heading4 from '../components/atoms/typography/Heading4'
import Heading5 from '../components/atoms/typography/Heading5'
import Heading6 from '../components/atoms/typography/Heading6'

export default {
  title: 'Atoms/Typography',
  components: [
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5
  ]
}

// Heading1
const Template1 = (args: any) => <Heading1 {...args} />
export const H1 = Template1.bind({})
H1.args = {
  title: 'Heading1'
}

// Heading2
const Template2 = (args: any) => <Heading2 {...args} />
export const H2 = Template2.bind({})
H2.args = {
  title: 'Heading2'
}

// Heading3
const Template3 = (args: any) => <Heading3 {...args} />
export const H3 = Template3.bind({})
H3.args = {
  title: 'Heading3'
}

// Heading4
const Template4 = (args: any) => <Heading4 {...args} />
export const H4 = Template4.bind({})
H4.args = {
  title: 'Heading4'
}

// Heading5
const Template5 = (args: any) => <Heading5 {...args} />
export const H5 = Template5.bind({})
H5.args = {
  title: 'Heading5'
}

// Heading6
const Template6 = (args: any) => <Heading6 {...args} />
export const H6 = Template6.bind({})
H6.args = {
  title: 'Heading6'
}
