// Setup initialState
const initialState = {
  car:{
    price: 26395, name: '2019 Ford Mustang', image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg', features: []
  }
}

export const carReducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    // case :
    //   return {
    //     ...state,
    //     car: action.payload
    //   };
    default:
      return state;
  }
};