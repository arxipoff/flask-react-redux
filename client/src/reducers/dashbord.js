import { fromJS } from 'immutable';
import { LOAD_DASHBORD, SUCCESS, FAIL } from '../constants';

const defaultState = fromJS({
  dashbord_api: []
});

export default function (state = defaultState, action) {
  const { type, response, error } = action;


  switch (type) {
    case LOAD_DASHBORD + SUCCESS:
      return state.set('dashbord_api', response)

    case LOAD_DASHBORD + FAIL:
      return state.set('dashbord_api', error)

    default:
      return state;
  }

}