// Setup initialState
const initialState = {
  store: [
    {id: 1, name: 'V-6 engine', price: 1500},
    {id: 2, name: 'Racing detail package', price: 1500},
    {id: 3, name: 'Premium sound system', price: 500},
    {id: 4, name: 'Rear spoiler', price: 250}
  ]
}

export const storeReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
      // case :
      //   return {
      //     ...state,
      //     store: action.payload
      //   };
      default:
        return state;
    }
  };