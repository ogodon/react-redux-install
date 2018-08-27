const dataService = store => next => action => {
  next(action);

  switch(action.type) {
    case 'INCREMENT':
      setTimeout(() => {
        return next({
          type: 'ME_FINISHED'
        })
      }, 5000);
      break;

    case 'DECREMENT':
      setTimeout(() => {
        return next({
          type: 'YOU_FINISHED'
        })
      }, 5000);
      break;

    default:
      break;
  }

};

export default dataService;