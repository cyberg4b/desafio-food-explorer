import { Container } from "./styles.js";

export function Select({ children, ...rest }) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}