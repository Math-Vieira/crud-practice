import { useDeleteCustomer } from '@/hooks/request-hooks/customer/useDeleteCustomer';
import { Modal } from '../Modal';
import * as S from './styles';
import { useForm } from 'react-hook-form';

type Props = {
  id: string;
  onCancelClick: () => void;
};

export const DeleteCustomerModal = ({ id, onCancelClick }: Props) => {
  const createCustomer = useDeleteCustomer();
  const methods = useForm<{ id: string }>();

  const onSubmit = methods.handleSubmit(async () => {
    const result = await createCustomer.mutateAsync(id);
    if (result) onCancelClick();
  });

  return (
    <Modal
      title="Remoção de cliente"
      modalBody={
        <S.BodyContainer>
          Tem certeza que deseja deletar o cliente? Esta ação é irreversível,
          não será mais possível recuperar seus dados após confirmar a ação.
        </S.BodyContainer>
      }
      onCancel={onCancelClick}
      hasForm
      onSubmit={onSubmit}
    />
  );
};
