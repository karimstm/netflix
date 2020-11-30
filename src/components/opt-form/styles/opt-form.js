import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 66%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 780px) {
    height: 50px;
  }
`;

export const Header = styled.h3`
  color: white;
  font-size: 19.2px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 40px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 62px;
  background-color: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 950px) {
    height: 50px;
    font-szie: 16px;
    margin-top: 20px;
    font-weight: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 950px) {
      width: 16px;
    }
  }
`;

export const Break = styled.div`
  flex-direction: column;
  flex-basis: 100%;
  height: 0;
`;
