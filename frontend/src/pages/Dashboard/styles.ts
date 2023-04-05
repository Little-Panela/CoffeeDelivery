import styled from "styled-components";

import homeBackground from "../../assets/home-background.png";

interface ItemProps {
  color: string;
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 5.75rem 160px;
  img {
    width: 476px;
    height: 360px;
  }
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) {
    padding: 5rem 70px;
    img {
      width: 100%;
      height: auto;
    }
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) {
    padding: 4rem 40px;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 2rem 20px;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  strong {
    font-family: "Baloo 2";
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme["gray-900"]};
    max-width: 21ch;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme["gray-800"]};
    max-width: 48ch;
  }
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 1000px;
    color: ${({ theme }) => theme["background"]};
    background-color: ${({ color }) => color};
  }
`;

export const StoreWrapper = styled.div`
  padding: 2rem 160px;
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme["gray-800"]};
    margin-bottom: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 70px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) {
    padding: 2rem 40px;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 2rem 20px;
  }
`

