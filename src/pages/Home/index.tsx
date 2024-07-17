import { Button } from '@/components/Button';
import * as S from './styles';
import { CustomerList } from '@/components/CustomerList';
// import { CustomerModal } from '@/components/CustomerModal';

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Content className="centralizer">
        <S.TitleContainer>
          <S.Title>Lista de clientes cadastrados</S.Title>
          <Button>Cadastrar novo cliente</Button>
        </S.TitleContainer>
        <CustomerList />
        {/* <CustomerModal title="Cadastro de cliente" /> */}
      </S.Content>
    </S.Wrapper>
  );
};
