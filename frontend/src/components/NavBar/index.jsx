import { X, List, Receipt, SignOut } from "@phosphor-icons/react"

import { Input } from "../Input"
import { Button } from "../Button"

import { Container, Content, Title, ButtonBox, Actions } from "./styles.js"

import { MagnifyingGlass } from "@phosphor-icons/react"

import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth.jsx"
import { Link } from "react-router-dom"

export function NavBar({ setSearch, onTargetMenu, isClose, isDisabled }) {
    const { user, signOut, orders } = useAuth()
    const [count, setCount] = useState(0)

    useEffect(() => {
        let counter = 0

        orders.map(order => {
            counter += order.quantity
        })

        setCount(counter)
    },[])

    return (
        <Container>
            <ButtonBox onClick={onTargetMenu}>
                {isClose ? <List /> : <X />}
                {isClose ? "" : <span className="text-button">Menu</span>}
            </ButtonBox>

            { isClose &&
                <>
                    <Title>
                        <Content>
                            <div>
                                <svg width="25" height="25" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0.744263L25.9904 8.24426V23.2443L13 30.7443L0.00961876 23.2443V8.24426L13 0.744263Z" fill="#065E7C" />
                                </svg>

                                <h1>food explorer</h1>
                            </div>
                            { user.role === 'admin' &&
                                <span>admin</span>
                            }
                        </Content>
                    </Title>

                    <Input
                        icon={MagnifyingGlass}
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(event) => setSearch(event.target.value)}
                        disabled={isDisabled}
                    />

                    { user.role === 'user' &&
                        <ButtonBox>
                            <Receipt />
                            <span className="order-count">{ count }</span>
                        </ButtonBox>
                    }
                    
                    <Actions>
                        { user.role === 'admin' ?
                            <Link to="/novoprato">
                                <Button title="Novo prato" isActive />
                            </Link>
                            :
                            <Button icon={Receipt} title={`Pedidos (${count})`} isActive />
                        }
                        <ButtonBox onClick={signOut}>
                            <Link to="/">
                                <SignOut />
                            </Link>
                        </ButtonBox>
                    </Actions>
                </>
            }
        </Container>
    )
}