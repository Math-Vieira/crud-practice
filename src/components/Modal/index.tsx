import { Button } from '../Button';
import { CustomerIcon } from '../CustomerIcon';
import * as S from './styles';

type Props = {
  title?: string;
  modalBody?: React.ReactNode;
  ConfirmButtonText?: string;
  CancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  hasForm?: boolean;
};

export const Modal = ({
  title = 'Modal title',
  modalBody = 'Add your modal body here',
  ConfirmButtonText = 'Confirmar',
  CancelButtonText = 'Cancelar',
  hasForm = false,
  onConfirm,
  onCancel
}: Props) => {
  const ContentWrapper = hasForm ? S.ContentForm : S.Content;

  return (
    <S.Wrapper>
      <ContentWrapper>
        <S.ModalTitleContainer>
          <CustomerIcon />
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalTitleContainer>
        <S.ModalBody>{modalBody}</S.ModalBody>
        <S.ButtonContainer>
          <Button buttonStyle="outline" onClick={onCancel}>
            {CancelButtonText}
          </Button>
          <Button onClick={onConfirm} type={hasForm ? 'submit' : 'button'}>
            {ConfirmButtonText}
          </Button>
        </S.ButtonContainer>
      </ContentWrapper>
    </S.Wrapper>
  );
};
