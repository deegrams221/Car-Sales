import React from 'react';

import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in AdditionalFeature: ', state);
  return {
    data: state.car.feature
  };
};

export default connect(mapStateToProps,{})(AdditionalFeature);
