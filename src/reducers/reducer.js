const initialState = {
  counter: [
    {
      count: 101
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ACTION':
      return state.counter.map(count => {
        return { ...count, ...action.count };
      });
    case 'MY_ACTION2':
      return state.map(count => {
        return [...state.counter, { count: action.count }];
      });
    default:
      return state;
  }
};
