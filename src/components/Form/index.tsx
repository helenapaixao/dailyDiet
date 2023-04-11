import { ButtonContainer } from "./styles";
import ScreenContainer from "@components/ScreenContainer";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export default function Form() {
  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
}
