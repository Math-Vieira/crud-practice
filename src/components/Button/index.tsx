import * as S from './styles';

type Props = {
  children: string;
  buttonStyle?: 'default' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = ({
  children = 'Button',
  buttonStyle = 'default',
  loading = false,
  disabled = false,
  type = 'button',
  ...props
}: Props) => {
  const Wrapper =
    buttonStyle === 'default' ? S.WrapperDefault : S.WrapperOutline;

  return (
    <Wrapper
      disabled={disabled || loading}
      $loading={!!loading}
      type={type}
      {...props}
    >
      {children}
    </Wrapper>
  );
};
