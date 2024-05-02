import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Roboto", sans-serif;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        }
    }

    .no-scroll {
        overflow-y: hidden;
    }

    input {
        width: 100%;
        max-width: 34.4rem;

        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};

        padding: 16px 14px;

        border: none;
        border-radius: 5px;
        outline: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    button {
        background: none;
        border: none;

        cursor: pointer;
    }
`