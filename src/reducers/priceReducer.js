// Setup initialState
const initialState = {
    additionalPrice: 0,
}

export const priceReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
      // case :
      //   return {
      //     ...state,
      //     additionalPrice: action.payload
      //   };
      default:
        return state;
    }
  };