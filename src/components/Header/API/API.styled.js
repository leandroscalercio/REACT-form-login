import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 40px;
  padding-top: 40px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Locale = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #222222;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    width: 80px;
    height: 70px;
  }
`;

export const Degree = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #222222;
  @media (max-width: 768px) {
    width: 77px;
    height: 72px;
  }
`;
