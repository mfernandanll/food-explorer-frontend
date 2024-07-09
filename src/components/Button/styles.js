import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  min-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  font-size: 0.875rem;

  border: none;
  border-radius: 0.313rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100 };
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
`