import { Container } from "./styles.js";

export function Input({ icon: Icon, ...rest }) {
    return(
        <Container $icon={Icon}>
            {Icon && <Icon /> }
            <input {...rest} />
        </Container>
    )
}