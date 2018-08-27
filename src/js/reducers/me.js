export default (state = { score: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      console.log('INCREMENT');
      return {
        ...state,
        score: state.score + 1
      };
      break;

    case 'ME_FINISHED':
      console.log('me finished dispatched');
      return state;
      break;

    default:
      return state;
      break;
  }
};
