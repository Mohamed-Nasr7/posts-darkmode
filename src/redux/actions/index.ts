export const setPostId = (value: number) => {
  return {
    type: 'POST_ID',
    payload: value,
  };
};

export const setPostTitle = (value: string) => {
  return {
    type: 'POST_TITLE',
    payload: value,
  };
};

export const setPostBody = (value: string) => {
  return {
    type: 'POST_BODY',
    payload: value,
  };
};
