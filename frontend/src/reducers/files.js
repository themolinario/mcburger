const initialState = {
  file: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'files-uploaded':
      return {
        ...state,
        file: action.file,
      };
    case 'files-removed':
      return {
        ...state,
        file: null,
      };
    default:
      return state;
  }
};

export default reducer;