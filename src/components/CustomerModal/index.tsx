import * as S from './styles';
import { Modal } from '../Modal';

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
      modalBody={<S.Body>teste</S.Body>}
      hasForm
    />
  );
};
