import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  background-color: ${({theme}) => theme.COLORS.DARK_200};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-family: "Roboto", sans-serif;
  
  padding: 1.5rem;
  width: 13.12rem;
  height: 18.25rem;

  border-radius: 8px;

  > img {
    width: 5.5rem;
    height: 5.5rem;
  }

  > a {
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    > h2 {
      font-size: 0.875rem;
    }
  }

  > h2 {
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-size: 1rem;
  }

  > button {
    min-height: 2rem;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }

`;

export const Counter = styled.div`
  display: flex;
  gap: 0.875rem;
`

export const ButtonCounter = styled.div`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
`