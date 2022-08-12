const initialState = {
  postId: null,
  postTitle: '',
  postBody: '',
};

export const postReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'POST_ID':
      return { ...state, postId: payload };

    case 'POST_TITLE':
      return { ...state, postTitle: payload };

    case 'POST_BODY':
      return { ...state, postBody: payload };

    default:
      return state;
  }
};
