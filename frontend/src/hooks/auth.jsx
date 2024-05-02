import { createContext, useContext, useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const [orders, setOrders] = useState([])

    function handleMenuIsOpen(isOpen) {
        if (isOpen) {
            window.scrollTo(0, 0)
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })

            const { user, token } = response.data

            delete user.password

            localStorage.setItem("@food:user", JSON.stringify(user))
            localStorage.setItem("@food:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })

            const ordersList = await api.get(`/orders/${user.id}`)
            localStorage.setItem("@orders", JSON.stringify(ordersList.data))

            setOrders(ordersList.data)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@food:user")
        localStorage.removeItem("@food:token")
        localStorage.removeItem("@orders")

        setData({})
        handleMenuIsOpen(false)
    }

    useEffect(() => {
        const user = localStorage.getItem("@food:user")
        const token = localStorage.getItem("@food:token")

        const loadOrders = localStorage.getItem("@orders")

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}` // Persiste a autenticação em todo site

            setData({
                user: JSON.parse(user)
            })
        }

        if (loadOrders) {
            setOrders(JSON.parse(loadOrders))
        } else {
            setOrders([])
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            orders,
            setOrders,
            handleMenuIsOpen,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }