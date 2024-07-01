import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 10.75rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: none;
  resize: none;
  
  border-radius: 0.5rem;
  padding: 0.875rem;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;