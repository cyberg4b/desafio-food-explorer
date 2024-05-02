import SideBar from "../SideBar"
import { NavBar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { Stepper } from "../../components/Stepper"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"

import { CaretLeft } from "@phosphor-icons/react"
import dishImage from "../../assets/img/group.png"

import { Main, Container, Section, ButtonText, Desc, Tags, Actions } from "./styles.js"

import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth.jsx"
import { Link, useLocation } from "react-router-dom"

import { api } from "../../services/api.js"

function Dish() {
  const { user, setOrders } = useAuth()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { pathname } = useLocation()
  const id = pathname.split("/").pop()

  const [imageFile, setImageFile] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDesctription] = useState("")
  const [price, setPrice] = useState("")
  const [tags, setTags] = useState([])

  const handlePriceFormat = (value) => {
    const newValue = String(value).split(".")

    if (newValue.length === 2) {
      return newValue[0] + "," + newValue[1]
    }

    return newValue[0] + ",00"
  }

  const addToCard = async () => {
    const quantity = Number(document.querySelector(`#stepper-${id}`).textContent)

    const newOrder = {
      quantity,
      user_id: user.id,
      dish_id: id
    }

    if (quantity) {
      await api.post(`/orders`, newOrder)
    } else {
      await api.delete(`/orders?user_id=${user.id}&dish_id=${id}`)
    }

    const ordersList = await api.get(`/orders/${user.id}`)

    localStorage.setItem("@orders", JSON.stringify(ordersList.data))
    setOrders(ordersList.data)
    window.location.reload()
  }

  useEffect(() => {
    const getDish = async () => {
      const { data: dish } = await api.get(`/dish/${id}`)

      setImageFile(dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage)
      setTitle(dish.title)
      setDesctription(dish.description)
      setPrice(dish.price)

      const { data: ingredients } = await api.get(`/ingredients?dish=${id}`)
      setTags(ingredients)
    }
    getDish()
  }, [])

  return (
    <Main>
      <SideBar
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        isDisabled
      />

      <NavBar
        isClose={true}
        onTargetMenu={() => setMenuIsOpen(true)}
        isDisabled
      />

      <Container>
        <main>
          <nav>
            <ButtonText to="/">
              <CaretLeft />
              voltar
            </ButtonText>
          </nav>

          <Section>
            <img src={imageFile} alt="Imagem do Prato" />

            <Desc>
              <h1>{title}</h1>
              <p>{description}</p>

              <Tags>
                {
                  tags && tags.map(tag =>
                    <Tag key={tag.id} title={tag.name} />
                  )
                }
              </Tags>

              <Actions>
                {user.role === 'admin' ?
                  <Link to={`/editarprato/${id}`}>
                    <Button title="Editar prato" isActive />
                  </Link>
                  :
                  <>
                    <Stepper id={id} />
                    <Button
                      title={`incluir ∙ R$ ${handlePriceFormat(price)}`}
                      onClick={addToCard}
                      isActive
                    />
                  </>
                }
              </Actions>
            </Desc>
          </Section>
        </main>
      </Container>

      <Footer />
    </Main>
  )
}

export default Dish