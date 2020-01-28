import React from 'react';

import {connect} from 'react-redux';

const Header = props => {
  let theCar = props.state.car;
  return (
    <>
      <figure className="image is-128x128">
        <img src={theCar.image} alt={theCar.name} />
      </figure>
      <h2>{theCar.name}</h2>
      <p>Amount: ${theCar.price}</p>
    </>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in Header: ', state);
  return {
    state
  };
};

export default connect(mapStateToProps,{})(Header);
// export default Header;