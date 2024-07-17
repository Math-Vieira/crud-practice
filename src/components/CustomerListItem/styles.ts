import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.darkGreen};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.6rem;
  font-size: 1.5rem;

  justify-content: space-between;
`;

export const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;
