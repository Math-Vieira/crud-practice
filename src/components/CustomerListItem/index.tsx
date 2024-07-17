import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { CustomerIcon } from '../CustomerIcon';
import * as S from './styles';
import { DeleteCustomerModal } from '../DeleteCustomerModal';
import { Customer } from '@/services/customer/getCustomers.service';
import { CustomerModal } from '../CustomerModal';

type Props = {
  name: string;
  id: string;
  customer: Customer;
};

//TODO implement id
export const CustomerListItem = ({ name, id, customer }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  return (
    <>
      <S.ListItem>
        <S.UserIconContainer>
          <CustomerIcon />
          {name}
        </S.UserIconContainer>
        <S.ActionButtonContainer>
          <ActionButton type="view" onClick={() => setShowViewModal(true)} />
          <ActionButton type="edit" />
          <ActionButton type="trash" onClick={() => setShowDeleteModal(true)} />
        </S.ActionButtonContainer>
      </S.ListItem>
      {showDeleteModal && (
        <DeleteCustomerModal
          id={id}
          onCancelClick={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
      {showViewModal && (
        <CustomerModal
          title="Visualizar cliente"
          initialValues={customer}
          disabled
          showConfirmButton={false}
          onCancelClick={() => {
            setShowViewModal(false);
          }}
        />
      )}
    </>
  );
};
