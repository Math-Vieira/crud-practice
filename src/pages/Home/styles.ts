import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.mainColor};
  padding: 9rem 0 4rem 0;
  min-height: 100vh;
`;

export const Content = styled.div`
  /* background-color: red; */
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1``;
