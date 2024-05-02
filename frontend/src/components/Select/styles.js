import { styled } from "styled-components"

export const Container = styled.select`
    padding: 16px 14px;

    outline: none;
    border: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font: ${({ theme }) => theme.FONTS.ROBOTO_200_REGULAR};

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
`