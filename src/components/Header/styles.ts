import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 1rem 0;
  box-shadow: ${({ theme }) => theme.headerBoxShadow};
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
`;

export const LogoContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.mainTextColor};

  & div {
    margin-top: 0.5rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
