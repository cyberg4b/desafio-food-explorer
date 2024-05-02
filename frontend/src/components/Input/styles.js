import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    > svg {
        font-size: 2.6rem;
        
        margin-left: 14px;
        border-radius: 5px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`