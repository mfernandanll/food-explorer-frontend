import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 7.125rem;
  
  padding: 1.75rem;
  background: ${({theme}) => theme.COLORS.DARK_700};
`;

export const Content = styled.div`
  padding: 1.75rem;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  background-color: transparent;
  border: none;

  > span {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.313rem;
  }

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    padding: 0.625rem;
    font-size: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
