import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Title, Form, Wrapper } from "./styles.js"
import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"
import { api } from "../../services/api.js"

function Signup() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleCreateAccount = async () => {
        const response = await api.post("/users", { name, email, password })
            .catch(({ response: error }) => alert(error.data.message))

        if(response) {
            alert("Usuário criado com sucesso!")
            navigate(-1)
        }
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
                    <h1>Crie sua conta</h1>

                    <Wrapper>
                        <label htmlFor="dish-name">Seu nome</label>
                        <Input 
                            id="dish-name" 
                            type="text" 
                            placeholder="Exemplo: Maria da Silva" 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="user-email">Email</label>
                        <Input 
                            id="user-email" 
                            type="email" 
                            placeholder="Exemplo: exemplo@exemplo.com.br" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="dish-password">Senha</label>
                        <Input 
                            id="dish-password" 
                            type="password" 
                            placeholder="No mínimo 6 caracteres" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Wrapper>

                    <Button title="Criar conta" onClick={handleCreateAccount} isActive />

                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </Form>
            </div>
        </Container>
    )
}

export default Signup