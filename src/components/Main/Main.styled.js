import styled from 'styled-components';
import uolBall from '../../assets/uol-ball.png';

export const Container = styled.div`
  background-image: url(${uolBall});
  background-position: -8px 200px;
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: -230px 100px;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  text-align: right;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  margin: 0px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #222222;
  opacity: 0;
  transform: translateY(-20px);
  animation: animeleft 4s forwards;
  @keyframes animeleft {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;
