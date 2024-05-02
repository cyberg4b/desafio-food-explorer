import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Container = styled.div`
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100vh;

        margin-inline: 154px 108px;

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            width: 1100px;

        }
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    height: fit-content;
    margin-block: 158px 73px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 3.7rem;
    }

    > svg {
        width: 43px;
        height: 43px;
    }

    @media (max-width: 320px) {
        > h1 {
            font-size: 3rem;
        }

        > svg {
            width: 30px;
            height: 30px;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        gap: 19px;
        
        > h1 {
            font: ${({ theme }) => theme.FONTS.ROBOTO_700_BOLD};
        }

        > svg {
            width: 50px;
            height: 48px;
        }
    } 

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        margin-block: 0 60px;
    }
`

export const Form = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    padding-inline: 64px;

    > h1 {
        display: none;
        font: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    }

    > a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        width: 476px;

        padding: 64px;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 16px;

        > h1 {
            display: block;
        }

        > button {
            width: 100%;
        }
    }
`

export const Wrapper = styled.div`
    display: grid;
    gap: 8px;

    width: 100%;

    > label {
        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
    }

    > div {
        justify-content: start;
        border-radius: 8px;
        
        input {
            min-width: 100%;
            border-radius: 8px;
        }
    }

`