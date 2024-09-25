import React from 'react';

import { LoadingMessage } from './Splash.Styles';
import useSplashViewModel from './Splash.ViewModel';

import Logo from '@Components/Atoms/Layout/Logo';
import Loading from '@Components/Atoms/Layout/Loading';
import Container from '@Components/Atoms/Layout/Container';

const SplashScreen = () => {
  const {loadingMessage} = useSplashViewModel();

  return (
    <Container isCentered>
      <Logo />
      <Loading />
      <LoadingMessage>{loadingMessage}</LoadingMessage>
    </Container>
  );
};

export default SplashScreen;
