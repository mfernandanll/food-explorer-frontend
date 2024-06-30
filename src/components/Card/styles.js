import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  position: relative;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-family: "Roboto", sans-serif;
  
  padding: 1.5rem;
  max-width: 13.125rem;
  height: 18.25rem;

  border-radius: 8px;

  > img {
    max-width: 5.5rem;
    cursor: pointer;
  }

  > span {
    color: ${({theme}) => theme.COLORS.CAKE_100};
    line-height: 100%;
  }

  > button {
    min-height: 2rem;
  }
  
  svg {
    cursor: pointer;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 19rem;
    height: 28.875rem;

    gap: 0.938rem;

    > svg {
      right: 1.125rem;
    }

    > img {
      max-width: 11rem;
    }
    
    > p {
      font-size: 0.875rem;
      line-height: 160%;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
      overflow: hidden;
    }

    > span {
      font-size: 2rem;
      line-height: 160%;
    }
  }

`;

export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.LIGHT_300};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: center;

    width: 100%;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } 

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > h2 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 140%;
    }
  }
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex-direction: row;
    justify-content: center;

    > button {
      max-width: 5.75rem;
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