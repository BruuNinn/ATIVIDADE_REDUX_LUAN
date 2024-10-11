const initialState = {
    books: []
  };
  
  function bookReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload]
        };
      case 'REMOVE_BOOK':
        return {
          ...state,
          books: state.books.filter((_, index) => index !== action.payload)
        };
      default:
        return state;
    }
  }
  
  export default bookReducer;
  