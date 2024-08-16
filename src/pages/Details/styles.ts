import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const FixedContent = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeadContent = styled.div`
  padding: 1.938rem 3.5rem 1rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > button {
      font-weight: bold;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 1.5rem 8.688rem 2.625rem;
  }
`

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  height: auto;
  padding: 0 3.5rem 2rem;

  > img {
    width: 16.43rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 auto;

    flex-direction: row;
    gap: 2.938rem;
    padding-bottom: 9.688rem;

    > img {
      width: 24.37rem;
    }
  }
`;

export const DishDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > h1 {
    font-size: 1.688rem;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    text-align: center;
    line-height: 140%;
  }

  > button {
    margin-top: 2rem;
    min-height: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 42.938rem;

    align-items: flex-start;
    
    > h1 {
      font-size: 2.5rem;
    }
    
    > p {
      font-size: 1.5rem;
      text-align: start;
    }

    > button {
      max-width: 8.188rem;
    }
  }
`
export const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;

  > button {
    font-size: 0.591rem;
    max-width: 11.75rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    justify-content: flex-start;

    > button {
      padding: 0.75rem 1.5rem;
      /* max-width: 10.125rem; */

      font-size: 0.875rem;
    }
  }
`

export const Counter = styled.div`
  display: flex;
  gap: 0.875rem;
`

export const ButtonCounter = styled.div`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
`
