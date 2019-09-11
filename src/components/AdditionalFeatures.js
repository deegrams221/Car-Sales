import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeOnProps.length ? (
        <ol type="1">
          {props.storeOnProps.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in AdditionalFeatures: ', state);
  return {
    storeOnProps: state.store
  };
};

export default connect(mapStateToProps,{})(AdditionalFeatures);
