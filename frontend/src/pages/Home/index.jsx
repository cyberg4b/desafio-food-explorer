import SideBar from "../SideBar"

import { NavBar } from "../../components/NavBar"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"

import bannerImg from "../../assets/img/banner-img.png"
import bannerImgMobile from "../../assets/img/banner-img-mobile.png"
import dishImage from "../../assets/img/group.png"

import { Main, Banner, Text } from "./styles.js"

import { useEffect, useState } from "react"
import { api } from "../../services/api"

function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    const fetchDish = async () => {
      await api.get(`/dish?search=${search}`).then(res => setDishes(res.data))
    }

    fetchDish()
  }, [search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SideBar
        setSearch={setSearch}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />

      <NavBar
        isClose={true}
        onTargetMenu={() => setMenuIsOpen(true)}
        setSearch={setSearch}
      />

      <Main>
        <Banner>
          <div id="banner-content">
            <img className="desktopImage" src={bannerImg} alt="Imagem do banner" />
            <img className="mobileImage" src={bannerImgMobile} alt="Imagem do banner" />

            <Text>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </Text>
          </div>
        </Banner>

        <div id="section-content">
          <Section title="Refeições">
            {
              dishes && dishes.map(dish => {
                return dish.category == "snack" &&
                  <Card
                    key={String(dish.id)}
                    id={String(dish.id)}
                    image={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage}
                    name={dish.title}
                    desc={dish.description}
                    price={dish.price}
                  />
              })
            }
          </Section>

          <Section title="Sobremesas">
            {
              dishes && dishes.map(dish => {
                return dish.category == "dessert" &&
                  <Card
                    key={String(dish.id)}
                    id={String(dish.id)}
                    image={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage}
                    name={dish.title}
                    desc={dish.description}
                    price={dish.price}
                  />
              })
            }
          </Section>

          <Section title="Bebidas">
            {
              dishes && dishes.map(dish => {
                return dish.category == "drink" &&
                  <Card
                    key={String(dish.id)}
                    id={String(dish.id)}
                    image={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage}
                    name={dish.title}
                    desc={dish.description}
                    price={dish.price}
                  />
              })
            }
          </Section>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Home