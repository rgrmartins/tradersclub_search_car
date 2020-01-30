import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../services/history';

import { Container } from './styles';

import { saveCarRequest } from '../../store/modules/Car/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O Nome do veículo é obrigatório'),
  model: Yup.string().required('O Modelo do veículo é obrigatório'),
  year: Yup.number().required('O Ano do veículo é obrigatório'),
  color: Yup.string().required('A Cor do veículo é obrigatório'),
  km: Yup.number().required('O Ano do veículo é obrigatório'),
  price: Yup.number().required('O Preço do veículo é obrigatório'),
});

export default function CarForm() {
  const dispatch = useDispatch();

  function handleSubmit({ title, model, year, color, km, price }) {
    dispatch(saveCarRequest({ title, model, year, color, km, price }));
  }

  function handleCancel() {
    history.push('/');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input className="big" name="title" placeholder="Nome do Veículo" />
        <Input className="lado" name="model" placeholder="Modelo do Veículo" />
        <Input className="lado" name="year" placeholder="Ano do Veículo" />
        <Input className="lado" name="color" placeholder="cor do Veículo" />
        <Input className="lado" name="km" placeholder="Km do Veículo" />
        <Input className="lado" name="price" placeholder="Preço do Veículo" />

        <button className="blueButton" type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="blueButton" type="button">
          Remover
        </button>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
