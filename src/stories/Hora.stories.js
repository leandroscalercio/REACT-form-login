import Hora from '../components/Header/Hora/Hora';

export default {
  title: 'Hora',
  component: Hora,
};

const Template = (args) => <Hora {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
