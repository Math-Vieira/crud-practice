import { NotFoundBody } from '@/components/NotFound';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const NotFound = () => {
  return (
    <S.Wrapper>
      <NotFoundBody />
      <Link to="/">Clique aqui para retornar</Link>
    </S.Wrapper>
  );
};
