import * as S from './styles';
import { Modal } from '../Modal';
import { TextInput } from '../TextInput';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs, inputSchema } from './utils/validation-schema';

type Props = {
  title: string;
  disabled?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

export const CustomerModal = ({
  title,
  showConfirmButton,
  cancelButtonText,
  confirmButtonText
}: Props) => {
  const methods = useForm<Inputs>({ resolver: zodResolver(inputSchema) });
  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <Modal
      title={title}
      showConfirmButton={showConfirmButton}
      cancelButtonText={cancelButtonText}
      ConfirmButtonText={confirmButtonText}
      onSubmit={onSubmit}
      modalBody={
        <FormProvider {...methods}>
          <S.Body>
            <TextInput
              label="Nome"
              placeholder="Digite o nome do cliente..."
              name="name"
            />
            <TextInput
              label="E-mail"
              placeholder="Digite o email do cliente..."
              name="email"
            />
            <TextInput label="Cidade" placeholder="Ex: São paulo" name="city" />
            <TextInput
              label="Rua"
              placeholder="Ex: Rua Paulo de Souza"
              name="street"
            />
            <TextInput
              label="Número da casa"
              placeholder="Ex: 43"
              name="number"
            />
          </S.Body>
        </FormProvider>
      }
      hasForm
    />
  );
};
