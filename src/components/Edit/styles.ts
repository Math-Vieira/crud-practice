import styled from 'styled-components';

export const Wrapper = styled.svg`
  & path {
    fill: ${({ theme }) => theme.mainColor};
  }
`;
