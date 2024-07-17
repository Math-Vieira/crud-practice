import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input<{ $errorInput: boolean }>`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  border: 1px solid
    ${({ theme, $errorInput }) =>
      $errorInput ? theme.error : theme.lightGreen};
  font-size: 1rem;

  &:focus {
    border: 1px solid
      ${({ theme, $errorInput }) =>
        $errorInput ? theme.error : theme.darkGreen};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
  display: block;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
  font-weight: bold;
`;
