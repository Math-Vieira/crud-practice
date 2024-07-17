import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.darkGreen};
  color: ${({ theme }) => theme.secondaryTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  font-size: 1.4rem;
`;
