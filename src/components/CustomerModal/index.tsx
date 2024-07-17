import * as S from './styles';
import { Modal } from '../Modal';
import { TextInput } from '../TextInput';

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
  return (
    <Modal
      title={title}
      showConfirmButton={showConfirmButton}
      cancelButtonText={cancelButtonText}
      ConfirmButtonText={confirmButtonText}
      modalBody={
        <S.Body>
          <TextInput label="Nome" placeholder="Digite o nome do cliente..." />
          <TextInput
            label="E-mail"
            placeholder="Digite o email do cliente..."
          />
          <TextInput label="Cidade" placeholder="Ex: São paulo" />
          <TextInput label="Rua" placeholder="Ex: Rua Paulo de Souza" />
          <TextInput label="Número da casa" placeholder="Ex: 43" />
        </S.Body>
      }
      hasForm
    />
  );
};
