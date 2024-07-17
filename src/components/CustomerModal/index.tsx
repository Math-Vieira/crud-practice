import * as S from './styles';
import { Modal } from '../Modal';

type Props = {
  title: string;
  disabled?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
};

export const CustomerModal = ({
  title,
  showConfirmButton,
  cancelButtonText
}: Props) => {
  return (
    <Modal
      title={title}
      showConfirmButton={showConfirmButton}
      CancelButtonText={cancelButtonText}
      modalBody={<S.Body>teste</S.Body>}
      hasForm
    />
  );
};
