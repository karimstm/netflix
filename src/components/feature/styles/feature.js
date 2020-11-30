import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  padding: 75px 0;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  border-bottom: 8px solid #222;
`;

export const Group = styled(Container)`
  border-bottom: 0;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 1.625rem;
  font-weight: 500;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
