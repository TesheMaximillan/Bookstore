/* eslint-disable default-param-last */
const STATUS = 'bookstore/categories/status';

const initialState = [];

// Reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default: return state;
  }
};

// Action Creators
export const checkStatus = (category) => ({ type: STATUS, category });

export default categoryReducer;
