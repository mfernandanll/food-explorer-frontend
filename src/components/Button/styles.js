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
  border-radius: 5px;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.TOMATO_100 : theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
`