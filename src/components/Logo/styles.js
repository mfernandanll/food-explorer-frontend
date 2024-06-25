import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  Logo_polygon  from "../../assets/logo_polygon.svg?react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 3.12rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: ${({ $size }) => $size === "sm" ? '1rem' 
                : $size === "md" ? '1.375rem'
                : '2.32rem'};
    color: ${({ theme, $size }) => $size === "sm" ? theme.COLORS.LIGHT_700 : theme.COLORS.LIGHT_100};
    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-grow: 1;
  }
`

export const LogoIcon = styled(Logo_polygon)`
  width: ${({ $size }) => $size === "sm" ? '1.375rem' 
          : $size === "md" ? '1.5rem'
          : '2.32rem'};
  & path {
    fill: ${({ theme, $size }) => $size === "sm" ? theme.COLORS.LIGHT_700 : theme.COLORS.CAKE_200};
  } 
`