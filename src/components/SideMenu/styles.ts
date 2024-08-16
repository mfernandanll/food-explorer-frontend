import styled from 'styled-components'

interface ContainerProps {
  $isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;

  display: flex;
  flex-direction: column;

  visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "1" : "0")};
  transition: opacity 0.3s ease-out;
`

export const Content = styled.div`
  padding: 1.75rem;
  height: calc(100vh - 11.938rem);

  display: flex;
  flex-direction: column;
  gap: 2.25rem;  
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.313rem;
  
  background-color: transparent;
  border: none;

  > span {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.313rem;
  }

  > svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 300;
    display: flex;
    align-items: center;
    padding: 0.625rem;
    font-size: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
