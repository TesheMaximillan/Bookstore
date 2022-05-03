/* eslint-disable default-param-last */
const STATUS = 'bookstore/categories/status';

// Reducer
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default: return state;
  }
};

// Action Creators
export const checkStatus = () => ({ type: STATUS });

export default categoryReducer;
