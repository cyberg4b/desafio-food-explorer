import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 112px;
    padding: 56px 28px 24px;

    font: ${({ theme }) => theme.FONTS.ROBOTO_400_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > div:nth-child(3) {
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 32px;

        padding: 24px 100px;

        > button {
            display: none;
        }

        > div:nth-child(3) {
            display: flex;
            flex: 1;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
        padding: 24px 123px;
    }
`

export const Title = styled.div`
    flex: 1;
    
    display: flex;
    justify-content: center;
    text-align: end;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        flex: unset;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    
        width: 100%;
    
        > h1 {
            font-size: 2.1rem;
        }
    }

    > span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_100_REGULAR};
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        flex-direction: column;
        gap: 0;
        align-items: end;

        > div {
            width: auto;
    
            > h1 {
                font: ${({ theme }) => theme.FONTS.ROBOTO_500_BOLD};
            }
    
            > svg {
                width: 30px;
                height: 30px;
            }
        }

        > span {
            margin-top: -6px;
        }
    }
`

export const ButtonBox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font: normal 2.1rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        svg {
            height: 32px;
            font-size: 3rem;
        }
    }

    > svg {
        height: 32px;
        font-size: 3rem;
    }

    > .text-button {
        margin-left: 16px;
    }

    > .order-count {
        position: absolute;
        top: 52px;
        right: 22px;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;
        
        font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 100px;
    }
`

export const Actions = styled.div`
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        display: flex;
        gap: 32px;

        > a {
            text-decoration: none;
        }
        
        button:first-child {
            width: 21.6rem;
            font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            
            svg {
                width: 32px;
                height: 28px;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XXL}) {
        > button:first-child {
            padding-inline: 47px;
        }
    }
`