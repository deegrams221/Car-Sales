import React from 'react';

import {connect} from 'react-redux';

const Total = props => {
  let extraPrice = props.state.additionalprice;
  let price = props.state.car.price;

  return (
    <div className="content">
      <h4>Total Amount: ${price + extraPrice}</h4>
    </div>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in Total: ', state);
  return {
    state
  };
};

export default connect(mapStateToProps,{})(Total);
// export default Total;