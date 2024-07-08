import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  Banner,
  BannerText,
  Cards,
  Container,
  FixedContent,
  MainContent,
} from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import bannerImage from "../../assets/banner-image.png";
import bannerImageMobile from "../../assets/banner-image-mobile.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Home({ isAdmin }) {
  const swiperElRef1 = useRef(null);
  const swiperElRef2 = useRef(null);
  const swiperElRef3 = useRef(null);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState({
    meals: [],
    desserts: [],
    beverages: [],
  });

  const isDesktop = useMediaQuery({ minWidth: 768 });

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      const meals = response.data.filter((dish) => dish.category === "meal");
      const desserts = response.data.filter(
        (dish) => dish.category === "dessert"
      );
      const beverages = response.data.filter(
        (dish) => dish.category === "beverage"
      );

      setDishes({ meals, desserts, beverages });
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        setSearch={setSearch}
      />
      <FixedContent>
        <Header
          onOpenMenu={() => setMenuIsOpen(true)}
          isAdmin={isAdmin}
          setSearch={setSearch}
        />
        <MainContent>
          <Banner>
            <img
              src={isDesktop ? bannerImage : bannerImageMobile}
              alt="Banner image"
            />
            <BannerText>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </BannerText>
          </Banner>
          <Cards>
            <p>Refeições</p>

            <Swiper
              key={isDesktop}
              ref={swiperElRef1}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.meals.map((dish) => (
                <SwiperSlide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDetails={handleDetails}
                    data={dish}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p>Sobremesas</p>

            <Swiper
              key={isDesktop}
              ref={swiperElRef1}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.desserts.map((dish) => (
                <SwiperSlide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDetails={handleDetails}
                    data={dish}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p>Bebidas</p>

            <Swiper
              key={isDesktop}
              ref={swiperElRef1}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.beverages.map((dish) => (
                <SwiperSlide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDetails={handleDetails}
                    data={dish}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Cards>
        </MainContent>
        <Footer />
      </FixedContent>
    </Container>
  );
}
