import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  Logo_polygon  from "../../assets/logo_polygon.svg?react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  flex-grow: 1;

  > small {
    color: ${({ theme}) => theme.COLORS.CAKE_100};
    font-size: 0.75;
    line-height: 160%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-grow: ${({ $size }) => $size === "sm" ? 0 : 1};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-grow: 0;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $size }) => $size === "sm" ? "start" : "center"};
  gap: ${({ $size }) => $size === "sm" ? '0.375rem' 
                : $size === "md" ? '0.5rem'
                : '0.625rem'};

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: ${({ $size }) => $size === "sm" ? '1rem' 
                : $size === "md" ? '1.375rem'
                : '2.32rem'};
    color: ${({ theme, $size }) => $size === "sm" ? theme.COLORS.LIGHT_700 : theme.COLORS.LIGHT_100};
    white-space: nowrap;
  }
`

export const LogoIcon = styled(Logo_polygon)`
  width: ${({ $size }) => $size === "sm" ? '1.15rem' 
          : $size === "md" ? '1.5rem'
          : '2.32rem'};
  height: ${({ $size }) => $size === "sm" ? '1.15rem' 
          : $size === "md" ? '1.5rem'
          : '2.32rem'};
          
  & path {
    fill: ${({ theme, $size }) => $size === "sm" ? theme.COLORS.LIGHT_700 : theme.COLORS.CAKE_200};
  } 
`