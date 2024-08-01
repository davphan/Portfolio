import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0px;
  scroll-margin-top: 60px;

  @media screen and (max-width: 768px) {
    padding: 35px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0 20px;
    padding: 20px 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 12px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.secondary_dark};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
