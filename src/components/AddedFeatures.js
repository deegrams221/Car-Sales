import React from 'react';

import {connect} from 'react-redux';
import {removeFeature} from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('AddedFeatures', props);

  let car = props.state.car;
  let theStore = props.state.store;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("item in AddedFeatures");
    props.removeFeature(item);
  };

  console.log('car from AddedFeatures', car);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature} />
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
    state
  };
};

export default connect(mapStateToProps,{removeFeature})(AddedFeatures);
// export default AddedFeatures;