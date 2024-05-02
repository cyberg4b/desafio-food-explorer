import { useRef } from "react";
import { Category, Container, Content, Gradient, Button } from "./styles.js";

import { CaretLeft } from "@phosphor-icons/react";

export function Section({ title, children }) {
    const dishContainer = useRef(null)

    const scrollRight = () => {
        dishContainer.current.scrollLeft -= 300
    }

    const scrollLeft = () => {
        dishContainer.current.scrollLeft += 300
    }

    return (
        <Category>
            <h1>{title}</h1>
            <Container>
                <Gradient>
                    <Button onClick={scrollRight}>
                        <CaretLeft />
                    </Button>
                </Gradient>
                <Content ref={dishContainer}>
                    {children}
                </Content>
                <Gradient>
                    <Button onClick={scrollLeft}>
                        <CaretLeft />
                    </Button>
                </Gradient>
            </Container>
        </Category>
    )
}