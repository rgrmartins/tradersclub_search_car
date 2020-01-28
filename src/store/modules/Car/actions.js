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

export function createCarRequest(car) {
  return {
    type: '@car/CREATE_CAR_REQUEST',
    payload: { car },
  };
}

export function createCarSuccess(car) {
  return {
    type: '@car/CREATE_CAR_SUCCESS',
    payload: { car },
  };
}

export function updateCarRequest(car) {
  return {
    type: '@car/UPDATE_CAR_REQUEST',
    payload: { car },
  };
}

export function updateCarSuccess(car) {
  return {
    type: '@car/UPDATE_CAR_SUCCESS',
    payload: { car },
  };
}

export function carFailure() {
  return {
    type: '@car/CAR_FAILURE',
  };
}
