import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints"

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    > #section-content {
        margin-left: 24px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        margin-inline: 124px;
    
        > #section-content {
            margin: 0;
        }
    }
`

export const Banner = styled.section`
    > #banner-content {
        display: flex;
        justify-content: center;

        max-width: 1120px;
        height: 120px;
        
        margin: 44px 16px 62px 36px;

        border-radius: 2.92px;
        background: rgb(0,19,28);
        background: linear-gradient(0deg, rgba(0,19,28,1) 0%, rgba(9,30,38,1) 100%);
    
        img {
            position: relative;
            z-index: 0;
            
            margin-left: -30px;
            margin-top: -30px;
        }

        .desktopImage {
            display: none;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        justify-content: center;
        
        > #banner-content {
            width: fit-content;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        display: flex;
        justify-content: center;

        > #banner-content {
            position: relative;
            justify-content: unset;
            
            width: 100%;
            height: 100%;
    
            margin: 0;
            margin-block: 164px 62px;
    
            text-align: end;

            img {
                position: absolute;
                bottom: 0;
    
                margin-left: -70px;
            }

            .desktopImage {
                display: block;
            }

            .mobileImage {
                display: none;
            }
        }
    }
`

export const Text = styled.div`
    position: absolute;
    z-index: 1;

    box-sizing: content-box;
    width: 202px;

    margin-left: -8px;
    padding: 3.6rem 2.1rem 0 0;

    > h2 {
        font: 600 1.8rem/140% "Poppins", sans-serif;
    }
    
    > p {
        font: normal 1.2rem/140% "Poppins", sans-serif;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
        position: relative;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        width: 100%;

        margin: 0;
        padding: 8.8rem 10rem 9.2rem 0;
        
        > h2 {
            font: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
        }

        > p {
            font: ${({ theme }) => theme.FONTS.ROBOTO_300_REGULAR};
        }
    }
`