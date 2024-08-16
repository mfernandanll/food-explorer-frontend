import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const FixedContent = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;

  height: auto;
  padding: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: calc(100% - 15.375rem);
    margin: 0 auto;
  }
`;

export const Banner = styled.div`  
  background: linear-gradient(#091E26, #00131C);

  height: 7.5rem;
  
  margin-inline: 0.75rem 1rem;
  margin: 2.75rem 0 3.875rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  border-radius: 0.188rem;

  > img {
    width: 11.93rem;
    position: absolute;
    left: -2rem;
    bottom: 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;

    height: 16.25rem;
    margin-inline: 0.063rem;

    border-radius: 0.5rem;

    margin: 6rem 0 3rem 0;

    > img {
      width: 35rem;
      left: -0.438rem;
      bottom: 0;
    }
    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 10.75rem 0 3rem;

    > img {
      width: 41rem;
    }
  }
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 12.62rem;
  position: absolute;
  top: 2.25rem;
  right: 1.313rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 140%;

    margin-bottom: 0.188rem;
  }

  > p {
    font-size: 0.75rem;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {    
    width: 26.37rem;
    top: 5.5rem;
    right: 4.25rem;

    > h1 {
      font-weight: 500;
      font-size: 2.5rem;

      margin-bottom: 0.5rem;
    }

    > p {
      font-size: 1rem;
      line-height: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    right: 6.25rem;
  }
`

export const Cards = styled.div`
  > p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }

  .swiper {
    z-index: 0;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 51.2rem;
    margin: -25.6rem -1rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: bolder;
    mask-image: none;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .swiper-button-prev {
    background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.DARK_400} 100% 0%, transparent 100%);

    &::after {
      font-size: 1rem;
    }
  }

  .swiper-button-next {
    font-size: 1rem;
    background: linear-gradient(to right, transparent 0%, ${({ theme }) => theme.COLORS.DARK_400} 100% 0%, transparent 100%);

    &::after {
      font-size: 1rem;
    }
  }

  @keyframes scale-up-center {
      0% {
          transform: scale(1);
      }
      100% {
          transform: scale(1.2);
      }
  }

`