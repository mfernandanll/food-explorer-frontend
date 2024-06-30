import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Banner, BannerText, Cards, Container, FixedContent, MainContent } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import bannerImage from "../../assets/banner-image.png";
import bannerImageMobile from "../../assets/banner-image-mobile.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
// Swiper Required Module
import { Navigation } from "swiper/modules";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <FixedContent>
        <Header onOpenMenu={() => setMenuIsOpen(true)} />
        <MainContent>
          
          <Banner>
            <img src={isDesktop ? bannerImage : bannerImageMobile} alt="Banner image" />
            <BannerText>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </BannerText>
          </Banner>
          <Cards>
            <p>Pratos Principais</p>
            <Swiper
              spaceBetween={isDesktop ? "27" : "16"}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                "320": {
                  slidesPerView: 2
                },
                "768": {
                  slidesPerView: 3
                },
              }}
              navigation={isDesktop ? true : false}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>

            <p>Sobremesas</p>
            <Swiper
              spaceBetween={isDesktop ? "27" : "16"}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                "320": {
                  slidesPerView: 2
                },
                "768": {
                  slidesPerView: 3
                },
              }}
              navigation={isDesktop ? true : false}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
            

            <p>Pratos Principais</p>
            <Swiper
              spaceBetween={isDesktop ? "27" : "16"}
              grabCursor={true}
              loop={true}
              loopAddBlankSlides={true}
              breakpoints={{
                "320": {
                  slidesPerView: 2
                },
                "768": {
                  slidesPerView: 3
                },
              }}
              navigation={isDesktop ? true : false}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
            
          </Cards>
        </MainContent>
        <Footer />

      </FixedContent>
    </Container>
  );
}