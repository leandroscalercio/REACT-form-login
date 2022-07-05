import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 97px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 90px;
  color: #e0e0e0;
`;

export const Validacao = styled.p`
  margin: 0 auto;
  width: 246px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 40px;
  color: #e9b425;
  visibility: ${(props) =>
    props.visibility === true ? 'visibility' : 'hidden'};
`;
