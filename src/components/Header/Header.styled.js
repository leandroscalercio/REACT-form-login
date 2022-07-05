import styled from 'styled-components';

export const HeaderHome = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 20vh;
`;

export const Logo = styled.img`
  width: 300px;
  height: 84px;
  @media (max-width: 768px) {
    width: 248px;
    height: 84px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 678px) {
    display: none;
  }
`;
