import React from 'react';
import AdditionalFeature from './AdditionalFeature';

// import {connect} from 'react-redux';
// import {buyItem} from '../actions';

const AdditionalFeatures = props => {
  console.log(props);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
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
// const mapStateToProps = state => {
//   console.log('state from mSTP in AdditionalFeatures: ', state);
//   return {
//     store: state
//   };
// };

// export default connect(mapStateToProps,{})(AdditionalFeatures);
export default AdditionalFeatures;