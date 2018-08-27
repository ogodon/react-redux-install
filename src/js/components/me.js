import React from 'react';
import { connect } from 'react-redux';

const Component = ({ score, changeScore, name }) => (
  <div>
    <h1>Welcome to <strong>my</strong> page: {name}</h1>
    <p>My score: {score}</p>
    <p><button onClick={changeScore}>Change score</button></p>
  </div>
);

const mapStateToProps = state => {
  return {
    score: state.me.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeScore: () => {
      dispatch({
        type: 'INCREMENT'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
