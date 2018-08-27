export default (state = { score: 0 }, action) => {
  switch(action.type) {
    case 'DECREMENT':
      return {
        ...state,
        score: state.score - 1
      };
    
    case 'YOU_FINISHED':
      console.log('you finished dispatched');
      return state;
      break;

    default:
      return state;
  }
};
