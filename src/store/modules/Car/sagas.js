import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { searchFailure, searchSuccess } from './actions';

export function* search({ payload }) {
  try {
    const { keyword } = payload;

    const response = yield call(api.get, 'cars', {
      params: {
        title_like: keyword,
      },
    });

    const cars = response.data;

    if (!cars || cars.length === 0) {
      toast.error('Veículo não Encontrado');
      history.push('/');
      yield put(searchFailure());
    } else {
      yield put(searchSuccess(cars));
      toast.success('Veículo Encontrado');
      history.push('/car_list');
    }
  } catch (error) {
    toast.error('Falha na busca por veículo.');
    yield put(searchFailure());
  }
}

export default all([takeLatest('@car/SEARCH_REQUEST', search)]);
