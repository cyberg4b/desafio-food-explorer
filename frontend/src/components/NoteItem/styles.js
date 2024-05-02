import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    width: fit-content;

    padding: 8px 16px;
    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "0px"};
    border-radius: 8px;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

    > input {
        width: 100px;

        padding: 0;
        margin-right: 8px;
        pointer-events: ${({ $isNew }) => $isNew ? "unset" : "none"};

        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
        background-color: transparent;
    }

    > button {
        display: flex;
        align-items: center;
        
        svg {
            width: 20px;
            height: 20px;
        }
    }

    > .button-add {
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > .button-delete {
        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`