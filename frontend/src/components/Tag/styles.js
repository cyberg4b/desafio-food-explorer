import { styled } from "styled-components"

export const Span = styled.span`
    padding: 4px 8px;

    border-radius: 5px;

    font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

`