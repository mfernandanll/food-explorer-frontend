import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`

export const FixedContent = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeadContent = styled.div`
  padding: 0.683rem 2rem 1rem;

  > button {
    font-size: 1.034rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-top: 2.5rem;
    padding-bottom: 2.625rem;
    
    > button {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 2.5rem 8.688rem 2.625rem;
  }
`

export const MainContent = styled.section`
  height: auto;
  padding: 0 2rem 4.188rem;

  > h1 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 0 auto;
    width: 85%;
    padding-bottom: 7.25rem;

    > h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > button {
    min-height: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > button {
      max-width: 10.75rem;
      align-self: flex-end;
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 2rem;

    .image {
      width: 19.168rem;
      max-width: 19.168rem;
    }

    .image, .price, .description {
      flex-grow: 1;
    }

    .name {
      flex-grow: 6;
    }

    .category {
      flex-grow: 3;
    }

    .ingredients {
      flex-grow: 9;
      max-width: 52.31rem;
    }

    .price {
      min-width: 18rem;
    }
  }
`

export const Image = styled.div`
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.5rem;

  padding: 0.75rem 2rem;

  > label {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > input {
      position: absolute;
      right: 0;
      z-index: -1;
    }

    > span {
      font-size: 0.875rem;
    }
  }

`

export const Category = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  
  > label {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > select {
      border: none;
      -webkit-appearance: none;
      cursor: pointer;
      
      width: 100%;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;

      > option {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      position: absolute;
      top: -0.188rem;
      right: 0;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.5rem;

  border-radius: 0.5rem;
`

export const ErrorMessage = styled.p`
  padding-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  font-weight: 700;
`