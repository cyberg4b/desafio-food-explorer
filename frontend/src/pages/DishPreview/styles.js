import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Main = styled.div`
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        > footer {
            position: absolute;
            bottom: 0;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;

    padding: 37px 54px 54px;

    nav {
        width: fit-content;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        padding: 24px 122px 0;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    > img {
        width: 264px;
        height: 264px;
        
        margin-block: 16px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        flex-direction: row;
        
        img {
            width: 390px;
            height: 390px;
            
            margin-block: 42px 0;
            margin-right: 47px;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
        img {
            width: 34%;
            height: 34%;
        }
    }
`

export const ButtonText = styled(Link)`
    display: flex;
    align-items: center;
    
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: 500 2.4rem/140% "Poppins", sans-serif;
    
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 3rem;
    }
`

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    max-width: 560px;
    width: 100%;

    text-align: center;

    > h1 {
        font: 500 2.7rem/140% "Poppins", sans-serif;
    }

    > p {
        align-self: center;

        max-width: 316px;
        font: normal 1.6rem/140% "Poppins", sans-serif;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        text-align: start;

        > h1 {
            white-space: nowrap;
            font: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
        }

        > p {
            align-self: auto;

            max-width: 100%;
            font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
        }
    }
`

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        justify-content: start;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    width: 100%;

    margin-top: 24px;

    > a {
        text-decoration: none;
        width: 100%;
        max-width: 31.6rem;
    }

    > div {
        font: ${({ theme }) => theme.FONTS.ROBOTO_400_BOLD};
    }

    > button {
        max-width: 31.6rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        justify-content: start;
        gap: 33px;

        > button {
            width: fit-content;
            padding: 12px 24px;
        }
    }
`