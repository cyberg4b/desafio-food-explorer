import { HeartStraight, PencilSimple } from "@phosphor-icons/react"
import dishImage from "../../assets/img/group.png"

import { Stepper } from "../Stepper"
import { Button } from "../Button"

import { Container, Section, Actions, Dish, Buttons } from "./styles.js"

import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth.jsx"
import { Link } from "react-router-dom"
import { api } from "../../services/api"

export function Card({ id, image, name, desc, price }) {
    const { user, setOrders } = useAuth()
    const [isFavorite, setIsFavorite] = useState(false)

    const handlePriceFormat = (value) => {
        const newValue = String(value).split(".")

        if(newValue.length === 2) {
            return newValue[0] + "," + newValue[1]
        }

        return newValue[0]
    }

    const addToCard = async () => {
        const quantity = Number(document.querySelector(`#stepper-${id}`).textContent)

        const newOrder = {
            quantity,
            user_id: user.id,
            dish_id: id
        }

        if(quantity) {
            await api.post(`/orders`, newOrder)
        } else {
            await api.delete(`/orders?user_id=${user.id}&dish_id=${id}`)
        }
        
        const ordersList = await api.get(`/orders/${user.id}`)

        localStorage.setItem("@orders", JSON.stringify(ordersList.data))
        setOrders(ordersList.data)
    }

    const handleFavorite = async () => {
        if(isFavorite) {
            await api.delete(`/favorite/${id}`)
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
            await api.post("/favorite", { user_id: user.id, dish_id: id })
        }
    }

    useEffect(() => {
        const fetchFavorite = async () => {
            const { data: response } = await api.get(`/favorite?user_id=${user.id}&dish_id=${id}`)

            if(response) {
                setIsFavorite(true)
            }
        }

        fetchFavorite()
    },[])

    return(
        <Container>
            <Section>
                <Actions>
                    { user.role === 'admin' ?
                        <Link to={`/editarprato/${id}`}>
                            <PencilSimple />
                        </Link>
                        :
                        <HeartStraight
                            onClick={handleFavorite}
                            weight={isFavorite ? "fill" : "regular"}
                        />
                    }
                </Actions>

                <Dish to={`/prato/${id}`}>
                    <img src={ image } alt="Foto do Prato" />

                    <h1>{ name } &gt;</h1>
                    <p>{ desc }</p>
                    <span>R$ { handlePriceFormat(price) }</span>
                </Dish>

                { user.role === 'user' &&
                    <Buttons>
                        <Stepper id={id} />
                        <Button title="incluir" onClick={addToCard} isActive />
                    </Buttons>
                }
            </Section>
        </Container>
    )
}