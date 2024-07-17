import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.mainColor};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  & a {
    font-weight: bold;
    color: ${({ theme }) => theme.mainTextColor};
    font-size: 3rem;
  }
`;
