import { ActionButton } from '../ActionButton';
import { CustomerIcon } from '../CustomerIcon';
import * as S from './styles';

type Props = {
  name: string;
  id: string;
};

//TODO implement id
export const CustomerListItem = ({ name }: Props) => {
  return (
    <S.ListItem>
      <S.UserIconContainer>
        <CustomerIcon />
        {name}
      </S.UserIconContainer>
      <S.ActionButtonContainer>
        <ActionButton type="view" />
        <ActionButton type="edit" />
        <ActionButton type="trash" />
      </S.ActionButtonContainer>
    </S.ListItem>
  );
};
