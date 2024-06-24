import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  padding: 1rem;

  border-radius: 8px;
  background: ${({theme}) => theme.COLORS.DARK_900};

  > input {
    width: 100%;

    background: transparent;
    border: none;
    
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`

