import React from 'react';

import {connect} from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featureOnProps.length ? (
        <ol type="1">
          {props.featureOnProps.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in AddedFeatures: ', state);
  return {
    featureOnProps: state.car.features
  };
};

export default connect(mapStateToProps,{})(AddedFeatures);