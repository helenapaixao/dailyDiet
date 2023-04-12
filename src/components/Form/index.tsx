import {View} from 'react-native'
import { ButtonContainer, Container } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export default function Form() {
  return (
    <Container>
      <Input label="Nome" />
      <Input label="Descrição" isMultiline={true} maxLength={200}  />

      <ButtonContainer>
        <Button
          size="m"
          type="primary"
          title="Cadastrar refeição"
          onPress={() => null}
        />
      </ButtonContainer>
    </Container>
  );
}
