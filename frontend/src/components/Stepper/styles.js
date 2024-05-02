import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_400_BOLD};
        }
    }
`

export const Button = styled.button`
    background: none;
    border: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.5rem;
    }
`