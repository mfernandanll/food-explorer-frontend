import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  padding: 1.813rem;
  height: 4.813rem;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > div small {
    font-size: 12px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 9.87rem;

  > img {
    width: 3.12rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 2.32rem;
    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-grow: 1;
    margin-top: 0;
  }
`