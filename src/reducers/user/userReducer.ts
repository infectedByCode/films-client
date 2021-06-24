const userReducer = (
  state = {},
  action: { type?: string; user: { uid?: string; token?: string } }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
