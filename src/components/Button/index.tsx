import * as S from './styles';

type Props = {
  children: string;
  buttonStyle?: 'default' | 'outline';
  loading?: boolean;
  disabled?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = ({
  children = 'Button',
  buttonStyle = 'default',
  loading = false,
  disabled = false
}: Props) => {
  const Wrapper =
    buttonStyle === 'default' ? S.WrapperDefault : S.WrapperOutline;

  return (
    <Wrapper disabled={disabled || loading} $loading={!!loading}>
      {children}
    </Wrapper>
  );
};
