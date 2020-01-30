export function searchRequest(keyword) {
  return {
    type: '@car/SEARCH_REQUEST',
    payload: { keyword },
  };
}

export function searchSuccess(data) {
  return {
    type: '@car/SEARCH_SUCCESS',
    payload: { data },
  };
}

export function searchFailure() {
  return {
    type: '@car/SEARCH_FAILURE',
  };
}

export function createCarRequest(title) {
  return {
    type: '@car/CREATE_CAR_REQUEST',
    payload: { title },
  };
}

export function saveCarRequest({ titlecar, model, year, color, km, price }) {
  return {
    type: '@car/SAVE_CAR_REQUEST',
    payload: { titlecar, model, year, color, km, price },
  };
}

export function updateCarRequest(car) {
  return {
    type: '@car/UPDATE_CAR_REQUEST',
    payload: { car },
  };
}

export function loadBrands() {
  return {
    type: '@car/LOAD_BRANDS',
  };
}

export function loadBrandsSuccess(data) {
  return {
    type: '@car/LOAD_BRANDS_SUCCESS',
    payload: { data },
  };
}

export function carFailure() {
  return {
    type: '@car/CAR_FAILURE',
  };
}
