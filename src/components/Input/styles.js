import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 8px;
  /* background: ${({theme}) => theme.COLORS.DARK_900}; */
  background: transparent;

  > input {
    height: 3rem;
    width: 100%;

    padding: 1rem;
    
    background: transparent;
    border: none;
    
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

  }
`

