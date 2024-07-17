import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.lightGreen};
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.secondaryTextColor};
  font-weight: lighter;
  font-size: 1.2rem;

  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.darkGreen};
  }
`;
