import { Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {ButtonContainer} from './styles'
import ScreenContainer from "@components/ScreenContainer";
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScreenContainer>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Nome"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>Obrigatório</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Descrição"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      <ButtonContainer>
      <Button
        size="m"
        type="primary"
        title="Cadastrar refeição"
        onPress={handleSubmit(onSubmit)}
      />
      </ButtonContainer>

   
    </ScreenContainer>
  );
}
