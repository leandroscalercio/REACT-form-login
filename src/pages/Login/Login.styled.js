import styled from 'styled-components';
import background from '../../assets/notebook.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginArea = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;
export const LoginImage = styled.div`
  width: 50%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  img {
    display: none;
    @media (max-width: 768px) {
      margin-bottom: 40px;
      display: block;
      margin-left: -28px;
    }
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 90px;
  color: #e0e0e0;
`;

export const Paragraph = styled.p`
  font-family: 'Poppins';
  justify-content: center;
  width: 300px;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
`;
