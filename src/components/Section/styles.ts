import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 1.5rem;

  > h2 {
    margin-bottom: 1rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }

  > input::placeholder, textarea::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`;