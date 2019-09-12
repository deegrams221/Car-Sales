import React from 'react';

// import {connect} from 'react-redux';
// import {removeItem} from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('AddedFeatures', props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={props.removeItem} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// connecting components
// const mapStateToProps = state => {
//   console.log('state from mSTP in AddedFeatures: ', state);
//   return {
//     features: state.car.features
//   };
// };

// export default connect(mapStateToProps,{removeItem})(AddedFeatures);
export default AddedFeatures;