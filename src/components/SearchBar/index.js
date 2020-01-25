import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <Form>
        <Input name="veiculo" placeholder="Pesquisar Veículo" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
