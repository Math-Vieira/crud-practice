import * as S from './styles';
import { Edit } from '../Edit';
import { Trash } from '../Trash';
import { View } from '../View';

type Props = {
  type: keyof typeof ActionButtonType;
  onClick?: () => void;
};

const ActionButtonType = {
  edit: <Edit />,
  trash: <Trash />,
  view: <View />
};

export const ActionButton = ({ type, onClick }: Props) => {
  return <S.Wrapper onClick={onClick}>{ActionButtonType[type]}</S.Wrapper>;
};
