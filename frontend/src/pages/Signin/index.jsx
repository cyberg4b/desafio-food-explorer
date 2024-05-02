import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Title, Form, Wrapper } from "./styles.js"
import { Link } from "react-router-dom"

import { useState } from "react"
import { useAuth } from "../../hooks/auth.jsx"

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <div>
                <Title>
                    <svg width="50" height="48" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0.744263L25.9904 8.24426V23.2443L13 30.7443L0.00961876 23.2443V8.24426L13 0.744263Z" fill="#065E7C" />
                    </svg>

                    <h1>food explorer</h1>
                </Title>

                <Form>
                    <h1>Faça login</h1>

                    <Wrapper>
                        <label htmlFor="user-email">Email</label>
                        <Input 
                            id="user-email" 
                            type="email" 
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="dish-password">Senha</label>
                        <Input
                            id="dish-password" 
                            type="password" 
                            placeholder="No mínimo 6 caracteres" 
                            onChange={e => setPassword(e.target.value)}
                            required 
                        />
                    </Wrapper>

                    <Button 
                        type="submit" 
                        title="Entrar" 
                        onClick={handleSignIn}
                        isActive
                    />

                    <Link to="/cadastrar">
                        Criar uma conta
                    </Link>
                </Form>
            </div>
        </Container>
    )
}

export default Signin