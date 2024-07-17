import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { CustomerIcon } from '../CustomerIcon';
import * as S from './styles';
import { DeleteCustomerModal } from '../DeleteCustomerModal';

type Props = {
  name: string;
  id: string;
};

//TODO implement id
export const CustomerListItem = ({ name, id }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <S.ListItem>
        <S.UserIconContainer>
          <CustomerIcon />
          {name}
        </S.UserIconContainer>
        <S.ActionButtonContainer>
          <ActionButton type="view" />
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
    </>
  );
};
