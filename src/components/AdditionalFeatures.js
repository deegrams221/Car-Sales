import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {connect} from 'react-redux';
import {buyItem} from '../actions';

const AdditionalFeatures = props => {
  console.log('props from AdditionalFeatures: ', props);

  let theStore = props.state.store;
  console.log(theStore);

  const buyItem = item => {
    // dipsatch an action here to add an item
    // console.log("item from buyItem in App: ", item);
    props.buyItem(item);
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {theStore.length ? (
        <ol type="1">
          {theStore.map(items => (
            <AdditionalFeature key={items.id} feature={items} buyItem={buyItem} />
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
    state
  };
};

export default connect(mapStateToProps,{buyItem})(AdditionalFeatures);
// export default AdditionalFeatures;