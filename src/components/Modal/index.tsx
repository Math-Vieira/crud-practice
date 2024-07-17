import { Button } from '../Button';
import { CustomerIcon } from '../CustomerIcon';
import * as S from './styles';

type Props = {
  title?: string;
  modalBody?: React.ReactNode;
  ConfirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  hasForm?: boolean;
  showConfirmButton?: boolean;
  onSubmit?: () => void;
};

type BodyContainerProps = {
  children: React.ReactNode;
  hasForm: boolean;
  onSubmit?: () => void;
};

export const Modal = ({
  title = 'Modal title',
  modalBody = 'Add your modal body here',
  ConfirmButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
  hasForm = false,
  onConfirm,
  onCancel,
  showConfirmButton = true,
  onSubmit
}: Props) => {
  return (
    <S.Wrapper>
      <BodyContainer hasForm={hasForm} onSubmit={onSubmit}>
        <S.ModalTitleContainer>
          <CustomerIcon />
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalTitleContainer>
        <S.ModalBody>{modalBody}</S.ModalBody>
        <S.ButtonContainer>
          <Button buttonStyle="outline" onClick={onCancel} type="button">
            {cancelButtonText}
          </Button>
          {showConfirmButton && (
            <Button onClick={onConfirm} type={hasForm ? 'submit' : 'button'}>
              {ConfirmButtonText}
            </Button>
          )}
        </S.ButtonContainer>
      </BodyContainer>
    </S.Wrapper>
  );
};

export const BodyContainer = ({
  children,
  hasForm,
  onSubmit
}: BodyContainerProps) => {
  return (
    <>
      {hasForm && <S.ContentForm onSubmit={onSubmit}>{children}</S.ContentForm>}
      {!hasForm && <S.Content>{children}</S.Content>}
    </>
  );
};
