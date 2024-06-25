import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  height: 7.125rem;
  
  padding: 1.75rem;
  background: ${({theme}) => theme.COLORS.DARK_700};
`

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;
  
  > svg {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 1.5rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-grow: 1;
    margin-top: 0;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
  

  > svg {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`;