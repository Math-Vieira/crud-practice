import { Button } from '@/components/Button';
import * as S from './styles';
import { CustomerList } from '@/components/CustomerList';
import { useState } from 'react';
import { CustomerModal } from '@/components/CustomerModal';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      <S.Content className="centralizer">
        <S.TitleContainer>
          <S.Title>Lista de clientes cadastrados</S.Title>
          <Button onClick={() => setShowModal(true)}>
            Cadastrar novo cliente
          </Button>
        </S.TitleContainer>
        <CustomerList />
        {showModal && (
          <CustomerModal
            title="Cadastro de cliente"
            onCancelClick={() => setShowModal(false)}
          />
        )}
      </S.Content>
    </S.Wrapper>
  );
};
