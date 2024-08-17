import styled from "styled-components"

export const Container = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0.313rem;

  font-size: 0.875rem;
  line-height: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`