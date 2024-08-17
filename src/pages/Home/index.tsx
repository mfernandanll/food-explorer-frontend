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
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface HomeProps {
  isAdmin: boolean;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: 'meal' | 'dessert' | 'beverage';
  price: number;
  ingredients: Ingredient[];
  image: string | null;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

interface Ingredient {
  id: string;
  name: string;
}

interface FormattedDishes {
  meals: Dish[];
  desserts: Dish[];
  beverages: Dish[];
}

export function Home({ isAdmin }: HomeProps) {
  const swiperElRef1 = useRef(null);
  const swiperElRef2 = useRef(null);
  const swiperElRef3 = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [dishes, setDishes] = useState<FormattedDishes>({} as FormattedDishes);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  function handleDetails(id: string) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get<Dish[]>(`/dishes?search=${search}`);      
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
      {
        !isDesktop &&
        <SideMenu
          isAdmin={isAdmin}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} 
          setSearch={setSearch}
        />
      }

      <FixedContent>
        <Header
          isAdmin={isAdmin}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} 
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
              key="1"
              ref={swiperElRef1}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.meals && dishes.meals.map((dish) => (
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
              key="2"
              ref={swiperElRef2}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.desserts && dishes.desserts.map((dish) => (
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
              key="3"
              ref={swiperElRef3}
              spaceBetween={isDesktop ? "27" : "16"}
              navigation={isDesktop ? true : false}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {dishes.beverages && dishes.beverages.map((dish) => (
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
