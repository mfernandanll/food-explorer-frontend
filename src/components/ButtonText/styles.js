import styled from "styled-components"

export const Container = styled.button`
  /* width: 100%; */

  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  font-size: 1.5rem;
  line-height: 140%;

  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
`