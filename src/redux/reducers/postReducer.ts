const initialState = {
  id: null,
  title: '',
  body: '',
};

export const postReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case 'POST_ID':
      return { ...state, id: payload };

    case 'POST_TITLE':
      return { ...state, title: payload };

    case 'POST_BODY':
      return { ...state, body: payload };

    default:
      return state;
  }
};
