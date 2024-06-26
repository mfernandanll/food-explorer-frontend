import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const FixedContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  height: 100vh;
`;

export const Banner = styled.div`
  background: linear-gradient(#091E26, #00131C);
  height: 7.5rem;
  margin: 1.25rem 0 3.875rem 0.75rem;
  padding-right: 2rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  > img {
    width: 12rem;
    height: 9.31rem;

    position: absolute;
    top: -21px;
    left: -18px;
  }

  > h1 {
    font-size: 18px;
  }

  > p {
    font-size: 12px;
  }
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.438rem;
`

export const Cards = styled.div`
  > p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`