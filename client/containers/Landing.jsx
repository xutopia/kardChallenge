import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { loginLink } from '../actions/config';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  getLogin = () => {
    this.props.loginLink();
  }

  render() {
    return (
      <div>
        <div>Hello Landing!</div>
        <RaisedButton
          label="Login"
          onClick={() => this.getLogin()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    status: state.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    loginLink: (...args) => dispatch(loginLink(...args)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
