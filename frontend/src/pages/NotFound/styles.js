import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../utils/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: ${({ theme }) => theme.FONTS.ROBOTO_200_BOLD};
  
  > a {
    margin-top: 24px;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    font: ${({ theme }) => theme.FONTS.ROBOTO_400_BOLD};
  }
`;