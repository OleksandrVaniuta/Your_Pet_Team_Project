import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import BurgerButton from '../BurgerBtn/BurgerBtn';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAuth } from 'redux/Auth/AuthSelectors';
import { useWindowSize } from 'hooks/useResize';
import { HeaderWrapper, Wrapper, NavWrapper, Menu } from './Header.styled';
import { useEffect } from 'react';

export const Header = () => {
  // const { user } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useWindowSize();
  const { isLoggedIn } = useSelector(selectAuth);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavWrapper>
            {isLoggedIn && <UserMenu showName={screenWidth >= 768} />}
            {screenWidth >= 768 && !isLoggedIn && <AuthNav />}
            {screenWidth <= 1279 && (
              <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            <Menu isOpen={isOpen} screenWidth={screenWidth}>
              {screenWidth <= 767 && isLoggedIn && (
                <UserMenu showName setIsOpen={setIsOpen} />
              )}
              {screenWidth < 768 && screenWidth <= 1279 && !isLoggedIn && (
                <AuthNav setIsOpen={setIsOpen} />
              )}
              <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            </Menu>
          </NavWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};
