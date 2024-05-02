import { Minus, Plus } from "@phosphor-icons/react"

import { Container, Button } from "./styles.js"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth.jsx"

export function Stepper({ id }) {
    const [count, setCount] = useState(1)
    const { orders } = useAuth()

    useEffect(() => {
        orders.map(order => order.dish_id === Number(id) ? setCount(order.quantity) : null)
    },[])

    return(
        <Container>
            <Button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                <Minus />
            </Button>

            <span id={`stepper-${id}`}>{ count < 10 ? "0" + count : count }</span>

            <Button onClick={() => setCount(count + 1)}>
                <Plus />
            </Button>
        </Container>
    )
}