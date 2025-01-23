
import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, Banner, Title, Content } from './styles';
import { CartItems, CartResume, } from '../../components';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={logo} alt="logo devburger" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
          <CartItems /> 
         <CartResume />
      </Content>
      
    </Container>
  );
}
