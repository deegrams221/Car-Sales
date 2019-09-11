import React from 'react';

import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imgOnProps} alt={props.nameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </>
  );
};

// connecting components
const mapStateToProps = state => {
  console.log('state from mSTP in Header: ', state);
  return {
    nameOnProps: state.car.name,
    priceOnProps: state.car.price,
    imgOnProps: state.car.image
  };
};

export default connect(mapStateToProps,{})(Header);