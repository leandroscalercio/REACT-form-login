import styled from 'styled-components';

export const FooterLogin = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 10vh;

  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 570px;
  height: 60px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: right;

  margin-left: 300px;

  color: #ffffff;
  &::after {
    content: '';
    width: 100px;
    height: 0px;
    border: 1px solid #ffffff;
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterRefresh = styled.div`
  width: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 678px) {
    display: none;
  }
`;

export const FooterRefreshTimer = styled.div`
  width: 94px;
  display: flex;
  flex-direction: column;
`;

export const ParagraphTimer = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  margin-right: 30px;

  color: #ffffff;
`;

export const Seconds = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
`;

export const Timer = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const BtnNavegar = styled.a`
  text-decoration: none;
  width: 131px;
  background: #ffffff;
  padding: 25px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #c13216;
  &:hover {
    transition: 0.3s;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    width: 239px;
    order: 1;
  }
`;

export const BtnLogout = styled.a`
  text-decoration: none;
  width: 131px;

  padding: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    font-size: 20px;
  }
`;
