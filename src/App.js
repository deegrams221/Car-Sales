import React from 'react';
import './styles.scss'

// import {connect} from 'react-redux';
// import {addFeature, removeItem} from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

// connect components
// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     store: state.store
//     // state: state
//   };
// };
// export default connect(mapStateToProps,{addFeature, removeItem})(App);
export default App;