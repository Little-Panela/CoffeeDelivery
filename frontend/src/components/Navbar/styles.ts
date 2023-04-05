import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  height: 104px;

  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);

  padding: 2rem 160px;

  /* Medium devices (landscape tablets, 768px and up) */
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
`;

export const MenuWrapper = styled.nav`
  display: flex;
  position: relative;

  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-700"]};
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-500"]};

  cursor: pointer;

  p {
    color: ${({ theme }) => theme["purple-700"]};
    font-size: 0.875rem;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -8.35px;
  top: -8px;

  min-width: 1.25rem;
  min-height: 1.25rem;

  border-radius: 1000px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme["white"]};

  background-color: ${({ theme }) => theme["yellow-700"]};
`;
