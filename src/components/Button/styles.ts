import styled from 'styled-components';

const defineCursor = (loading: boolean, disabled: boolean) => {
  if (loading && disabled) return 'wait';
  if (disabled) return 'not-allowed';
  return 'pointer';
};

export const WrapperDefault = styled.button<{
  loading: boolean;
  disabled: boolean;
}>`
  background-color: ${({ theme }) => theme.lightGreen};
  padding: 0.5rem 1rem 0.3rem 1rem;
  border-radius: 0.2rem;
  border: none;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.secondaryTextColor};
  cursor: ${({ loading, disabled }) => defineCursor(loading, disabled)};
  font-weight: lighter;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }
`;

export const WrapperOutline = styled.button<{
  loading: boolean;
  disabled: boolean;
}>`
  background-color: transparent;
  padding: 0.5rem 1rem 0.3rem 1rem;
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.lightGreen};
  font-size: 0.6rem;
  color: ${({ theme }) => theme.lightGreen};
  cursor: ${({ loading, disabled }) => defineCursor(loading, disabled)};
  font-weight: lighter;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.secondaryTextColor};
  }
`;
