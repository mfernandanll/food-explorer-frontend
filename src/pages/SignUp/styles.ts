import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;
  margin-inline: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 4.563rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    margin-inline: 8.188rem;
  }
`

export const Formfield = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-grow: 1;
    justify-content: center
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    display: none;
  }

  > section {
    margin-bottom: 0.5rem;

    > h2 {
      margin-bottom: 0.5rem;
    }
  }

  /* > section > div > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  } */

  > a {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 0.875rem;
    text-align: center;
  }

  > button {
    min-height: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: center;
    max-width: 29.75rem;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    margin-top: 0;
    padding: 4rem;

    > h1 {
      display: block;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`