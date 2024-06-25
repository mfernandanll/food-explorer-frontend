import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const FixedContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;