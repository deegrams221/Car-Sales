import React from 'react';

// import {connect} from 'react-redux';

const AddedFeature = props => {
  console.log('props from AddedFeature', props);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

// connecting components
// const mapStateToProps = state => {
//   console.log('state from mSTP in AddedFeature: ', state);
//   return {
//     data: state.car.feature
//   };
// };

// export default connect(mapStateToProps,{})(AddedFeature);

export default AddedFeature;