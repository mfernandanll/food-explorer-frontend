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

  .orders {
    display: none;

    width: 13.5rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 0 8.688rem;
  }
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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const HeaderSerachArea = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
    flex-grow: 1;
  }
`

export const SignOutIcon = styled.button`
  display: none;
  background: transparent;
  border: none;

  > svg {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }

`;

export const OrderIcon = styled.button`
  background: transparent;
  border: none;

  position: relative;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  
  > svg {
    font-size: 2.5rem;
  }
  
  > span {
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    position: absolute;
    top: -0.25rem;
    right: -0.375rem;

    border-radius: 99px;
    padding-inline: 0.375rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }

`;