import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  max-height: 2rem;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%;

  padding: 0.5rem 1rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  outline: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 0.5rem;

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    max-width: 6.25rem;
  }

  > button {
    display: flex;
    align-items: center;
    
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`