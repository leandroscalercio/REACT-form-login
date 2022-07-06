import styled from 'styled-components';

export const ButtonLogin = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '67px')};
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '50px'};
  border: none;
  color: #fff;
  cursor: pointer;
`;
