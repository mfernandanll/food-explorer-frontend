import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`
  padding: 1.813rem;
  height: 4.813rem;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > small {
    font-size: 0.75rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 0 8.688rem;
  }
`;