import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo-tc.png';

export default function Menu() {
  return (
    <Container>
      <img src={Logo} alt="TradersClub" />
    </Container>
  );
}
