import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Entypo } from "@expo/vector-icons";
import ScreenContainer from "@components/ScreenContainer";
import { HourDaily } from "@components/HourDaily";

import {
  Container,
  Content,
  TextTitle,
  ContainerButton,
  ViewDaily,
  TextDaily,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <TextTitle>Refeições</TextTitle>
      <ContainerButton>
        <Button
          title="Nova Refeição"
          onPress={() => navigation.navigate("NewFood")}
          size="m"
          type="primary"
          icon={<Entypo name="plus" size={18} color="white" />}
        />
      </ContainerButton>
      <ScreenContainer>
        <ViewDaily>
          <TextDaily>29.09.25</TextDaily>
        </ViewDaily>
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        <HourDaily hour="16:00" content="Whey" status="WARNING" />
        <HourDaily hour="16:00" content="Whey" status="WARNING" />
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        <ViewDaily>
          <TextDaily>30.09.25</TextDaily>
          <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
          <HourDaily hour="16:00" content="Whey" status="WARNING" />
          <HourDaily hour="16:00" content="Whey" status="WARNING" />
          <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
          <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        </ViewDaily>
      </ScreenContainer>
    </Container>
  );
}
