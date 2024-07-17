import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightGreen};
  font-size: 1rem;

  &:focus {
    border: 2px solid ${({ theme }) => theme.darkGreen};
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
  display: block;
`;
