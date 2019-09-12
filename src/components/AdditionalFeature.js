import React from 'react';

import {connect} from 'react-redux';
import {addFeature} from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
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

export default connect(mapStateToProps,{addFeature})(AdditionalFeature);

// export default AdditionalFeature;
