import Title from '../components/Title/Title';

export default {
  title: 'Title',
  fontSize: '',
  color: '',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  as: 'h1',
  children: 'Continuar',
  fontSize: '30px',
  color: '#000',
};
