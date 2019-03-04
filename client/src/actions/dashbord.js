import { LOAD_DASHBORD } from '../constants';

export function loadDashbord() {
  return (dispatch) => {
    dispatch({
      type: LOAD_DASHBORD,
      callApi: 'http://localhost:3000/api',
      method: 'get',
    })
  }
}