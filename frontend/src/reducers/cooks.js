const initialState = {
  cooks: null,
};

const reducer = (state = initialState, action) => {
  let cooks = [...(state.cooks || [])];
  let index = 0;
  switch (action.type) {
    case 'cooks':
      return {
        ...state,
        cooks: (action.data || []),
      };
    case 'cooks-deleted':
      cooks.splice(cooks.findIndex((e) => e.id === action.user.id), 1);
      return {
        ...state,
        cooks: cooks,
      };
    case 'users-deleted-many':
      for (let i = 0; i < action.cooks.length; i++) {
        cooks.splice(cooks.findIndex((e) => e.id === action.cooks[i].id), 1);
      }
      return {
        ...state,
        cooks: cooks,
      };
    case 'users-created':
      cooks = [action.user, ...cooks];
      return {
        ...state,
        cooks: cooks,
      };
    case 'users-edited':
      index = cooks.findIndex((e) => e.id === action.user.id);
      if (index < 0) {
        return state;
      }
      cooks[index] = action.user;
      return {
        ...state,
        cooks: cooks,
      };
    default:
      return state;
  }
};

export default reducer;