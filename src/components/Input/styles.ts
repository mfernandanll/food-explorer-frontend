import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface ContainerProps {
  $focused: boolean;
  $variant: ContentVariant;
}

export type ContentVariant = 'primary' | 'secondary';

const contentVariants = {
  primary: 'DARK_900',
  secondary: 'DARK_800',
}

export const Content = styled.div<ContainerProps>`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme, $variant }) => theme.COLORS[contentVariants[$variant]]};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: 1px solid ${({ $focused, theme }) => $focused ? theme.COLORS.LIGHT_100 : 'none'};
  border-radius: 0.5rem;

  > input {
    height: 3rem;
    width: 100%;

    padding: 1rem;
    
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > svg {
    margin-left: 0.875rem;
  }
`

export const ErrorMessage = styled.p`
  padding-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  font-weight: 700;
`