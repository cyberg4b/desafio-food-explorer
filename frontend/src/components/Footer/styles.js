import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Container = styled.footer`
    position: relative;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 30px 28px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font: normal 1.2rem "DM Sans", sans-serif;

    > span {
        text-align: center;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {        
        padding: 24px 123px;

        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_200_REGULAR};
        }
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font: bold 1.5rem "Roboto", sans-serif;

    > svg {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
        margin-right: 3px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 12px;

        svg {
            width: 30px;
            height: 30px;
        }

        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_500_BOLD};
        }
    }
`