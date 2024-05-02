import { Container } from "./styles.js"

export function Button({ title, icon: Icon, isActive=false, type="button", ...rest }) {
    return (
        <Container type={type} $isActive={isActive} $icon={Icon} {...rest} >
            {Icon && <Icon size={30} />}
            <span>{title}</span>
        </Container>
    )
}