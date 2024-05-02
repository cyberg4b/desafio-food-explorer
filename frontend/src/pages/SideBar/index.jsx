import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"

import { MagnifyingGlass } from "@phosphor-icons/react"

import { Container, Main, Button } from "./styles.js"

import { useEffect } from "react"
import { useAuth } from "../../hooks/auth.jsx"
import { Link } from "react-router-dom"

function SideBar({ setSearch, menuIsOpen, setMenuIsOpen, isDisabled }) {
    const { user, signOut, handleMenuIsOpen } = useAuth()

    useEffect(() => {
        handleMenuIsOpen(menuIsOpen)
    },[menuIsOpen])

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <NavBar onTargetMenu={() => setMenuIsOpen(false)} isClose={false} />

            <Main>
                <Input 
                    icon={MagnifyingGlass} 
                    placeholder="Busque por pratos ou ingredientes" 
                    onChange={(event) => setSearch(event.target.value)} 
                    disabled={isDisabled}
                />
                { user.role === 'admin' &&
                    <Link to="/novoprato" onClick={() => setMenuIsOpen(false)}>
                        <Button>
                            Novo prato
                        </Button>
                    </Link>
                }
                <Link to="/">
                    <Button onClick={signOut} >
                        Sair
                    </Button>
                </Link>
            </Main>

            <Footer />
        </Container>
    )
}

export default SideBar