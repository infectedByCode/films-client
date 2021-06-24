import userReducer from './userReducer';

describe('#userReducer', () => {
  test('it returns default state if no action type', () => {
    const state = userReducer(undefined, {});
    expect(state).toEqual({});
  });
});
