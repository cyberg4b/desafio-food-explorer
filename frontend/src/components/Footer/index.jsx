import { Container, Title } from "./styles.js"

export function Footer() {
    return(
        <Container>
           <Title>
                <svg width="22" height="18" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.744263L25.9904 8.24426V23.2443L13 30.7443L0.00961876 23.2443V8.24426L13 0.744263Z" fill="#4D585E"/>
                </svg>

                <span>food explorer</span>
            </Title>

            <span>© 2024 - Todos os direitos reservados.</span>
        </Container>
    )
}