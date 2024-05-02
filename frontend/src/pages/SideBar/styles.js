import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;

    position: absolute;

    transform: translateX(-100%);
    transition: transform .5s ease-in-out;
    z-index: 100;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    &[data-menu-is-open="true"] {
        position: absolute;
        transform: translateX(0);
    }
`

export const Main = styled.section`
    height: 100%;

    padding: 36px 28px 0px;

    > div:nth-child(1) {
        margin-bottom: 36px;
    }
`

export const Button = styled.button`
    width: 100%;
    
    padding: 10px;

    text-align: start;

    font: 300 2.4rem/140% "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`