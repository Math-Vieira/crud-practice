import { useFormContext } from 'react-hook-form';
import * as S from './styles';

type Props = {
  label?: string;
  placeholder?: string;
  name: string;
};

export const TextInput = ({
  label = 'Input label',
  placeholder = 'Input placeholder',
  name
}: Props) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const errorMessage =
    errors[name] && errors[name].message ? errors[name].message : '';

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        placeholder={placeholder}
        {...register(name)}
        $errorInput={!!errorMessage}
      />
      {formState.errors[name] && <S.Error>{errorMessage.toString()}</S.Error>}
    </S.Wrapper>
  );
};
