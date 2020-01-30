import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../services/history';

import { Container } from './styles';

import { saveCarRequest, loadBrands } from '../../store/modules/Car/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O Nome do veículo é obrigatório'),
  model: Yup.string().required('O Modelo do veículo é obrigatório'),
  year: Yup.number().required('O Ano do veículo é obrigatório'),
  brand: Yup.string().required('A Montadora é obrigatória'),
  color: Yup.string().required('A Cor do veículo é obrigatório'),
  km: Yup.number().required('O Ano do veículo é obrigatório'),
  price: Yup.number().required('O Preço do veículo é obrigatório'),
});

export default function CarForm() {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.car.brands);

  function handleSubmit({ titlecar, model, year, brand, color, km, price }) {
    dispatch(
      saveCarRequest({ titlecar, model, year, brand, color, km, price })
    );
  }

  useEffect(() => {
    dispatch(loadBrands());
  }, [dispatch]);

  function handleCancel() {
    history.push('/');
  }

  return (
    <Container>
      <Form schema={schema}>
        <Input className="big" name="titlecar" placeholder="Nome do Veículo" />
        <Input className="lado" name="model" placeholder="Modelo do Veículo" />
        <Input className="lado" name="year" placeholder="Ano do Veículo" />
        <select>
          <option>Selecione a Montadora do Veículo</option>
          {brands
            ? brands.map(brand => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))
            : []}
        </select>
        <Input className="lado" name="color" placeholder="cor do Veículo" />
        <Input className="lado" name="km" placeholder="Km do Veículo" />
        <Input className="lado" name="price" placeholder="Preço do Veículo" />

        <button className="blueButton" type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="blueButton" type="button">
          Remover
        </button>
        <button type="button" onClick={handleSubmit}>
          Salvar
        </button>
      </Form>
    </Container>
  );
}
