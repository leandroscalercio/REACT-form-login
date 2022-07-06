import Input from '../components/Input/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 'Continuar',
  width: '',
  height: '',
  color: '#FFF',
  fontSize: '30px',
  borderRadius: '50px',
  background: '#000',
};
