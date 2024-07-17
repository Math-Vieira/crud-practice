import * as S from './styles';
import { Modal } from '../Modal';
import { TextInput } from '../TextInput';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs, inputSchema } from './utils/validation-schema';
import { useCreateCustomer } from '@/hooks/request-hooks/customer/useCreateCustomer';
import { Customer } from '@/services/customer/getCustomers.service';

type Props = {
  title: string;
  disabled?: boolean;
  showConfirmButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onCancelClick?: () => void;
  initialValues?: Customer;
};

export const CustomerModal = ({
  title,
  showConfirmButton,
  cancelButtonText,
  confirmButtonText,
  onCancelClick,
  initialValues,
  disabled
}: Props) => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
    defaultValues: initialValues ? initialValues : {}
  });
  const createCustomer = useCreateCustomer();
  const onSubmit = methods.handleSubmit(async (data) => {
    const result = await createCustomer.mutateAsync(data);
    if (result) onCancelClick?.();
  });

  return (
    <Modal
      title={title}
      showConfirmButton={showConfirmButton}
      cancelButtonText={cancelButtonText}
      ConfirmButtonText={confirmButtonText}
      onSubmit={onSubmit}
      onCancel={onCancelClick}
      modalBody={
        <FormProvider {...methods}>
          <S.Body>
            <TextInput
              label="Nome"
              placeholder="Digite o nome do cliente..."
              name="name"
              disabled={disabled}
            />
            <TextInput
              label="E-mail"
              placeholder="Digite o email do cliente..."
              name="email"
              disabled={disabled}
            />
            <TextInput
              label="Cidade"
              placeholder="Ex: São paulo"
              name="city"
              disabled={disabled}
            />
            <TextInput
              label="Rua"
              placeholder="Ex: Rua Paulo de Souza"
              name="street"
              disabled={disabled}
            />
            <TextInput
              label="Número da casa"
              placeholder="Ex: 43"
              name="number"
              disabled={disabled}
            />
          </S.Body>
        </FormProvider>
      }
      hasForm
    />
  );
};
