import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Container = styled.li`
    min-width: 210px;
    min-height: 292px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        min-width: 304px;
        max-width: 304px;
    }
`

export const Section = styled.div`
    position: relative;
    z-index: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 29.2rem;

    padding: 24px;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        min-height: 46.2rem;
        max-height: 46.2rem;
    }
`

export const Actions = styled.button`
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;

    background: none;
    border: none;

    > svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > a {
        text-decoration: none;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`

export const Dish = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > img {
        width: 88px;
        height: 88px;
    }

    > h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > p {
        display: none;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        > img {
            width: 176px;
            height: 176px;
        }

        > h1 {
            font: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
        }

        > p {
            display: block;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font: ${({ theme }) => theme.FONTS.ROBOTO_200_REGULAR};
        }

        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_600_REGULAR};
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    margin-top: 12px;

    > button {
        padding-block: 4px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        display: flex;
        flex-direction: row;
        gap: 16px;

        > button {
            padding-block: 12px;
        }
    }
`