import styled from 'styled-components';

export const InputLogin = styled.input`
  box-sizing: border-box;
  margin-bottom: 33px;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '60px')};
  background: ${(props) => (props.background ? props.background : '#26292c')};
  border: ${(props) =>
    props.border === true ? '1px solid yellow' : '1px solid #FFF'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '50px'};
  color: ${(props) => (props.color ? props.color : '#FFF')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  padding-left: 15px;
  &::placeholder {
    color: #fff;
  }
`;
