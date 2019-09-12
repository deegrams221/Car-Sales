import React from 'react';

// import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

// connecting components
// const mapStateToProps = state => {
//   console.log('state from mSTP in Header: ', state);
//   return {
//     name: state.car.name,
//     price: state.car.price,
//     image: state.car.image
//   };
// };

// export default connect(mapStateToProps,{})(Header);
export default Header;