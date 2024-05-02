import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Category = styled.div`
    margin-bottom: 24px;
    
    > h1 {
        margin-bottom: 24px;

        font: 500 1.8rem/140% "Poppins", sans-serif;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        margin-bottom: 48px;

        > h1 {
            font: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
        }
    }
`

export const Container = styled.div`
    position: relative;

    > div:nth-last-child(1) {
        right: 0;
        rotate: 180deg;

        margin-right: -1px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        height: 46.2rem;
    }
`

export const Content = styled.ul`
    display: flex;
    gap: 16px;

    list-style: none;

    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 27px;
        overflow-x: hidden;
    }
`

export const Gradient = styled.div`
    display: none;
    margin-left: -1px;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        position: absolute;
        z-index: 100;
        top: 0;

        pointer-events: none;
        
        display: flex;
        align-items: center;
    
        width: 278px;
        height: 100%;
        box-sizing: border-box;

        background: rgb(0,10,15);
        background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(0,10,15,0.27) 100%);
    }
`

export const Button = styled.button`
    height: 66%;

    pointer-events: visible;

    > svg {
        padding-left: 19px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 6rem;
    }
`