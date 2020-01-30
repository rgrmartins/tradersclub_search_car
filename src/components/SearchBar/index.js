import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

import {
  searchRequest,
  createCarRequest,
} from '../../store/modules/Car/actions';

export default function SearchBar() {
  const dispatch = useDispatch();

  function handleSubmit({ title }) {
    dispatch(createCarRequest(title));
  }

  function handleChange(e) {
    const { value } = e.target;
    dispatch(searchRequest(value));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Pesquisar Veículo"
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
