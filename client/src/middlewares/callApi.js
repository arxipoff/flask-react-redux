import { SUCCESS, FAIL } from '../constants';

export default store => next => action => {
  const { callApi, method, type, ...rest } = action;

  next(action);

  const opt = method === 'post' ?
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: method,
      body: JSON.stringify(rest)
    } : {
      headers: {
        'Content-Type': 'application/json'
      },
      method: method
    };


  setTimeout(() => {
   fetch(callApi, opt)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
    })
    .then(response => {
      next({ type: type + SUCCESS, response })
    })
    .catch(error => {
      next({ type: type + FAIL, error })
    })
  }, 1000);

}