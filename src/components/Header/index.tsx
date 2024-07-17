import { Logo } from '../Logo';
import { Moon } from '../Moon';
import * as S from './styles';

//TODO: Implement the theme switcher
export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContent className="centralizer">
        <S.LogoContainer href="/">
          <Logo />
          <div>Cadastro de clientes</div>
        </S.LogoContainer>
        <S.ThemeButton>
          <Moon />
        </S.ThemeButton>
      </S.HeaderContent>
    </S.Wrapper>
  );
};
