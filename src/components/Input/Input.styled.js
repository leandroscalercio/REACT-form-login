import styled from 'styled-components';

export const InputLogin = styled.input`
  box-sizing: border-box;
  margin-bottom: 33px;
  width: 100%;
  height: 60px;
  background: #26292c;
  border: ${(props) =>
    props.border === true ? '1px solid yellow' : '1px solid #FFF'};
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  padding-left: 15px;
  &::placeholder {
    color: #fff;
  }
`;
