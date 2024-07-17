import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  padding: 1rem;
  border-radius: 5px;
`;

export const ContentForm = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  padding: 1rem;
  border-radius: 5px;
`;

export const ModalTitleContainer = styled.div`
  min-width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ModalTitle = styled.h2`
  margin-top: 0.5rem;
`;

export const ModalBody = styled.div`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: end;
`;
