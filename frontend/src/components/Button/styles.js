import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 100%;

    padding-block: ${({ $icon }) => $icon ? "4px" : "12px"};

    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme, $icon }) => $icon ? "500 1rem/1.6rem 'Poppins', sans-serif" : theme.FONTS.POPPINS_100_MEDIUM};
    
    background-color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.TOMATO_100 : theme.COLORS.TOMATO_400};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.TOMATO_200 : ""};
    }
    
    > svg {
        width: 22px;
    }

    > span {
        white-space: nowrap;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        width: fit-content;

        padding: 12px 24px;
    }
`