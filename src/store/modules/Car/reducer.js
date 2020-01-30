import produce from 'immer';

const INITIAL_STATE = {
  keyword: null,
  car: null,
  title: null,
};

export default function car(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@car/SEARCH_REQUEST': {
        draft.keyword = action.payload.keyword;
        break;
      }
      case '@car/SEARCH_SUCCESS': {
        draft.car = action.payload.data;
        draft.keyword = null;
        break;
      }
      case '@car/SEARCH_FAILURE': {
        draft.keyword = null;
        break;
      }
      case '@car/CREATE_CAR_REQUEST': {
        draft.title = action.payload.title;
        break;
      }
      case '@car/CAR_FAILURE': {
        draft.title = null;
        break;
      }
      default:
    }
  });
}
