import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { searchRequest } from '../../store/modules/Car/actions';

export default function SearchBar() {
  const dispatch = useDispatch();

  function handleSubmit({ keyword }) {
    dispatch(searchRequest(keyword));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="keyword" placeholder="Pesquisar Veículo" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
}
