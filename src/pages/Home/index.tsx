import { Button } from '@/components/Button';
import * as S from './styles';

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Content className="centralizer">
        <S.TitleContainer>
          <S.Title>Lista de clientes cadastrados</S.Title>
          <Button>Cadastrar novo cliente</Button>
        </S.TitleContainer>
      </S.Content>
    </S.Wrapper>
  );
};
