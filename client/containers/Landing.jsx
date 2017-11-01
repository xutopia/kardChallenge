import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import initializeHandler from '../util/handler';
import { loginLink } from '../actions/config';
import { accessToken, accessTokenFailure } from '../actions/user';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // HACK: very dirty way of adding the Plaid Link initialization. Was gonna use react-plaid-link module, but it has not been updated for React 16.
    const script = document.createElement("script");

    script.src = "https://cdn.plaid.com/link/v2/stable/link-initialize.js";
    script.async = true;

    document.body.appendChild(script);
  }

  getLogin = () => {
    this.props.loginLink();
  }



  componentDidUpdate() {
    let that = this;
    if (this.props.config.publicKey !== '' && this.props.config.plaidENV !== '') {
      initializeHandler(this.props.config.publicKey, this.props.config.plaidENV, function(err, publicToken) {
        if (!err) {
          that.props.accessToken(publicToken);
        } else {
          that.props.accessTokenFailure(err);
        }
      });
    }
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
    config: state.config,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    loginLink: (...args) => dispatch(loginLink(...args)),
    accessToken: (...args) => dispatch(accessToken(...args)),
    accessTokenFailure: (...args) => dispatch(accessTokenFailure(...args)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
