import SideBar from "../SideBar"
import { NavBar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { Select } from "../../components/Select"

import { CaretLeft, UploadSimple } from "@phosphor-icons/react"

import { Main, ButtonText, Form, Wrapper, Section, Actions } from "./styles.js"

import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"

function Dish() {
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const [image, setImage] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("snack")
  const [tags, setTags] = useState([])
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleChangeImage = (event) => {
    const file = event.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  const handleSetTitle = (value) => {
    setTitle(value)
    setIsActive(value.length > 0)
  }

  const handleAddTag = () => {
    const tagValue = document.querySelector("#dish-add-ingredient").value
    setTags(prevState => [...prevState, tagValue])

    document.querySelector("#dish-add-ingredient").value = ""
  }

  const handleRemoveTag = (deleted) => {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  const handleSaveData = async () => {
    const response = await api.post("/dish", { title, description, category, price })
      .catch(({ response: error }) => alert(error.data.message))

    if (response && imageFile) {
      const fileUploadFrom = new FormData()
      fileUploadFrom.append("dish", imageFile)

      await api.patch(`/dish/${response.data.id}`, fileUploadFrom)
    }

    if (response) {
      tags.map(tag => api.post("/ingredients", { name: tag, dish_id: response.data.id }))

      alert("Prato adicionado com sucesso!")
      navigate(-1)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
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

      <Main>
        <nav>
          <ButtonText to="/">
            <CaretLeft />
            voltar
          </ButtonText>
        </nav>

        <h1>Novo prato</h1>

        <Form>
          <Wrapper id="image-wrapper">
            <h1>Imagem do prato</h1>

            <label id="file-label" htmlFor="dish-image">
              <UploadSimple />
              {imageFile ? String(imageFile.name) : "Selecione imagem"}
            </label>
            <input id="dish-image"
              type="file"
              placeholder="Selecione imagem"
              onChange={handleChangeImage}
            />
          </Wrapper>

          <Wrapper id="name-wrapper">
            <label htmlFor="dish-name">Nome</label>
            <input
              id="dish-name"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => handleSetTitle(e.target.value)}
            />
          </Wrapper>

          <Wrapper id="category-wrapper">
            <label htmlFor="dish-category">Categoria</label>
            <Select
              name="dish-category"
              id="dish-category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="snack">Refeições</option>
              <option value="dessert">Sobremesas</option>
              <option value="drink">Bebidas</option>
            </Select>
          </Wrapper>

          <Wrapper id="ingredient-wrapper">
            <label htmlFor="dish-add-ingredient">Ingredientes</label>
            <Section>
              {
                tags && tags.map((tag, index) => {
                  return (
                    <li key={String(index)}>
                      <NoteItem
                        id="dish-ingredient"
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    </li>
                  )
                })
              }
              <NoteItem
                id="dish-add-ingredient"
                placeholder="Adicionar"
                onClick={handleAddTag}
                isNew
              />
            </Section>
          </Wrapper>

          <Wrapper id="price-wrapper">
            <label htmlFor="dish-price">Preço</label>
            <input
              id="dish-price"
              type="text"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Wrapper>

          <Wrapper id="description-wrapper">
            <label htmlFor="dish-description">Descrição</label>
            <textarea
              name="description"
              id="dish-description"
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </Wrapper>

          <Actions>
            <Button 
              title="Salvar alterações" 
              onClick={handleSaveData} 
              isActive={isActive} 
            />
          </Actions>
        </Form>
      </Main >

      <Footer />
    </>
  )
}

export default Dish