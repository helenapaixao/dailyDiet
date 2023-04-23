import { ButtonContainer, Container } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/Button/ButtonDiet";

export default function Form() {
  return (
    <Container>
      <Input label="Nome" />
      <Input label="Descrição" isMultiline={true} maxLength={200} />

      <ButtonContainer>
        <ButtonDiet onPress={() => null} title="Não" type="no" />
        <ButtonDiet onPress={() => null} title="Sim" type="yes" />
      </ButtonContainer>
      <Button
        size="m"
        type="primary"
        title="Cadastrar refeição"
        onPress={() => null}
      />
    </Container>
  );
}
