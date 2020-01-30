import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  searchFailure,
  searchSuccess,
  carFailure,
  loadBrandsSuccess,
} from './actions';

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
      history.push('/');
      yield put(searchFailure());
    } else {
      yield put(searchSuccess(cars));
      history.push('/car_list');
    }
  } catch (error) {
    toast.error('Falha na busca por veículo.');
    yield put(searchFailure());
  }
}

export function* carCreate() {
  try {
    history.push('/car_form');
  } catch (error) {
    toast.error('Falha criar formulário.');
    yield put(carFailure());
  }
}

export function* saveCar({ payload }) {
  const { title, model, brand, year, color, km, price } = payload;
  try {
    const response = yield call(api.post, 'cars', {
      title,
      model,
      brand,
      year,
      color,
      km,
      price,
    });

    const car = response.data;

    if (!car || car.length === 0) {
      yield put(searchFailure());
    }
    history.push('/');
  } catch (error) {
    toast.error('Falha ao salvar o veículo.');
    yield put(carFailure());
  }
}

export function* loadingBrands() {
  try {
    const response = yield call(api.get, 'brands');

    const brands = response.data;

    if (!brands || brands.length === 0) {
      history.push('/');
    } else {
      yield put(loadBrandsSuccess(brands));
    }
  } catch (error) {
    toast.error('Falha ao carregar as Montadoras.');
    yield put(carFailure());
  }
}

export default all([
  takeLatest('@car/SEARCH_REQUEST', search),
  takeLatest('@car/CREATE_CAR_REQUEST', carCreate),
  takeLatest('@car/SAVE_CAR_REQUEST', saveCar),
  takeLatest('@car/LOAD_BRANDS', loadingBrands),
]);
