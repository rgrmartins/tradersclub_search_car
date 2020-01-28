import React from 'react';
import { useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';

import { Container, CarTable } from './styles';

export default function CarList() {
  const cars = useSelector(state => state.car.car);

  return (
    <Container>
      <CarTable>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>
                <strong>{car.title}</strong>
                <p>{`${car.model} º ${car.brand} º ${car.km} KM`}</p>
              </td>
              <td>
                <span>{formatPrice(car.price)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </CarTable>
    </Container>
  );
}
