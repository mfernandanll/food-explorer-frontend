import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;
  max-width: 110.6rem;
  margin: auto;

  display: flex;
  flex-direction: column;

  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;

  @keyframes puff-in-center {
      0% {
          transform: scale(2);
          filter: blur(4px);
          opacity: 0;
      }
      100% {
          transform: scale(1);
          filter: blur(0px);
          opacity: 1;
      }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    align-items: center;
    padding: 0 6.75rem;
  }
`

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

export const Formfield = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-grow: 1;
    justify-content: center
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 54rem;

  padding: 4rem 3.5rem;
  border-radius: 1.6rem;

  > h1 {
    display: none;
  }

  > .inputs {
    margin-bottom: 2rem;
  }

  > .inputs p {
    margin-bottom: 0.5rem;
  }

  > a {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 0.875rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    max-height: 29.75rem;
    max-width: 29.75rem;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    margin-top: 0;

    > h1 {
      display: block;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`