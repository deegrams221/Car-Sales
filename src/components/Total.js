import React from 'react';

// import {connect} from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalprice}</h4>
    </div>
  );
};

// connecting components
// const mapStateToProps = state => {
//   console.log('state from mSTP in Total: ', state);
//   return {
//     price: state.car.price,
//     additionalPrice: state.additionalPrice
//   };
// };

// export default connect(mapStateToProps,{})(Total);
export default Total;