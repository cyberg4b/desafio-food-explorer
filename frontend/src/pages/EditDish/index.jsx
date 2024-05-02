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
import { useLocation, useNavigate } from "react-router-dom"

function EditDish() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const id = pathname.split("/").pop()

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

  const handleTitle = (value) => {
    setTitle(value)
    setIsActive(value.length > 0)
  }

  const handleAddTag = () => {
    const tagValue = document.querySelector("#dish-add-ingredient").value
    setTags(prevState => [...prevState, { name: tagValue }])

    document.querySelector("#dish-add-ingredient").value = ""
  }

  const handleRemoveTag = (deleted) => {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  const handleDeleteDish = () => {
    api.delete(`/dish/${id}`)

    alert("Prato removido com sucesso!")
    navigate("/")
  }

  const handleSaveDish = async () => {
    const dish = { title, description, category, price }

    if (image.length !== 0) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("dish", imageFile)

      await api.patch(`/dish/${id}`, fileUploadForm)
    }

    const response = await api.put(`/dish/${id}`, dish)
      .catch(({ response: error }) => alert(error.data.message))

    if (response) {
      const { data: ingredients } = await api.get(`/ingredients?dish=${id}`)

      // Ingredientes que não existem ainda
      tags.map(tag => !tag.dish_id && api.post("/ingredients", { name: tag.name, dish_id: id })
        .catch(({ response: error }) => alert(error.data.message)))

      // Ingredientes que foram removidos da lista
      const deletedTags = ingredients.filter(ing => !tags.some(tag => tag.name === ing.name))
      deletedTags.forEach(deleted => api.delete(`/ingredients/${deleted.id}`))

      alert("Alterações salvas com sucesso!")
      navigate(-1)
    }
  }

  useEffect(() => {
    const getDish = async () => {
      const { data: dish } = await api.get(`/dish/${id}`)
      const { data: ingredients } = await api.get(`/ingredients?dish=${id}`)

      setImageFile(dish.image)
      setTitle(dish.title)
      setCategory(dish.category)
      setPrice(dish.price)
      setDescription(dish.description)
      setTags(ingredients)
    }

    getDish()
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
        <ButtonText to="/">
          <CaretLeft />
          voltar
        </ButtonText>

        <h1>Editar prato</h1>

        <Form>
          <Wrapper id="image-wrapper">
            <h1>Imagem do prato</h1>

            <label id="file-label" htmlFor="dish-image">
              <UploadSimple />
              {
                imageFile ?
                  typeof (imageFile) == 'object' ?
                    String(imageFile.name)
                    :
                    String(imageFile)
                  :
                  "Selecione imagem para alterá-la"
              }
            </label>
            <input
              id="dish-image"
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
              value={title}
              onChange={(e) => handleTitle(e.target.value)}
            />
          </Wrapper>

          <Wrapper id="category-wrapper">
            <label htmlFor="dish-category">Categoria</label>
            <Select
              name="dish-category"
              id="dish-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="snack">Refeições</option>
              <option value="dessert">Sobremesas</option>
              <option value="drink">Bebidas</option>
            </Select>
          </Wrapper>

          <Wrapper id="ingredient-wrapper">
            <label htmlFor="dish-ingredient">Ingredientes</label>
            <Section>
              {
                tags && tags.map((tag, index) => {
                  return (
                    <li key={String(index)}>
                      <NoteItem
                        id="dish-ingredient"
                        value={tag.name}
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
              value={price}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </Wrapper>

          <Actions>
            <Button title="Excluir prato" onClick={handleDeleteDish} isActive />
            <Button title="Salvar alterações" onClick={handleSaveDish} isActive={isActive} />
          </Actions>
        </Form>
      </Main >

      <Footer />
    </>
  )
}

export default EditDish