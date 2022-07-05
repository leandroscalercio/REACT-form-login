import styled from 'styled-components';

export const Titles = styled.h1`
  font-family: 'Poppins';
  font-size: ${(props) => (props.fontSize ? props.fontSize : '40px')};
  color: ${(props) => (props.color ? props.color : 'red')};
  opacity: 0;
  transform: translateY(-20px);
  animation: animeleft 1s forwards;
  @keyframes animeleft {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;
