import { useState } from "react";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Banner, BannerText, Cards, Container, FixedContent, MainContent } from "./styles";
import { Footer } from "../../components/Footer";
import bannerImage from "../../assets/banner-image.png"
import { Card } from "../../components/Card";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <FixedContent>
        <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <MainContent>
          <Banner>
            <img src={bannerImage} alt="Banner image" />
            <BannerText>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </BannerText>
          </Banner>
          <Cards>
            <p>Pratos Principais</p>
            <Card></Card>
          </Cards>
        </MainContent>
      </FixedContent>
      <Footer/>
    </Container>
  )
}