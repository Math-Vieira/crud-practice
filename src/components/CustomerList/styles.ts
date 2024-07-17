import styled from 'styled-components';

export const Wrapper = styled.ul`
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.darkGreen};
  margin-top: 3rem;
  padding: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
