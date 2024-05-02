import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"
import { Link } from "react-router-dom"

export const Main = styled.section`
    padding: 16px 32px 53px;

    display: grid;

    > h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
        margin-block: 24px 32px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        padding: 40px 123px 116px;
    }
`

export const ButtonText = styled(Link)`
    display: flex;
    align-items: center;

    width: fit-content;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: 500 1.7rem/140% "Poppins", sans-serif;

    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.2rem;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        font: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

        > svg {
            font-size: 3rem;
        }
    }
`

export const Form = styled.section`
    display: grid;
    gap: 24px;

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 32px;

        grid-template-columns: 1fr 3fr 2fr;
        grid-template-areas:
        "img dish category"
        "ingr ingr price"
        "desc desc desc"
        "buttons buttons buttons";

        #image-wrapper {
            grid-area: img;
            white-space: nowrap;
        }
        
        #name-wrapper {
            grid-area: dish;
        }
        
        #category-wrapper {
            grid-area: category;
        }
        
        #ingredient-wrapper {
            grid-area: ingr;
        }
        
        #price-wrapper {
            grid-area: price;
        }
        
        #description-wrapper {
            grid-area: desc;
        }
    }
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
    }

    > label {
        margin-bottom: 16px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
    }

    > input {
        min-width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border-radius: 8px;
    }

    input[type="file"] {
        display: none;
    }

    > #file-label {
        display: flex;
        align-items: center;
        gap: 8px;

        padding: 12px 32px;
        margin: 0;
        margin-top: 15px;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

        > svg {
            font-size: 2.7rem;
        }
    }

    > select {
        padding: 16px 14px;

        outline: none;
        border: none;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_200_REGULAR};

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }

    > textarea {
        resize: none;
        padding: 14px;

        outline: none;
        border: none;
        border-radius: 8px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    list-style: none;

    padding: 8px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        justify-content: center;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    width: 100%;

    > button:first-child {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        grid-area: buttons;
        justify-content: end;
    }
`