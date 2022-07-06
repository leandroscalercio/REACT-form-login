import Data from '../components/Header/Data/Data';

export default {
  title: 'Data',
  component: Data,
};

const Template = (args) => <Data {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
