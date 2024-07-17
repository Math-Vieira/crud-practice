import * as S from './styles';

type Props = {
  label?: string;
  placeholder?: string;
};

export const TextInput = ({
  label = 'Input label',
  placeholder = 'Input placeholder'
}: Props) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} />
    </S.Wrapper>
  );
};
