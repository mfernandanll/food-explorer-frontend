import { useState } from "react";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Container, FixedContent } from "./styles";

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
      </FixedContent>
    </Container>
  )
}