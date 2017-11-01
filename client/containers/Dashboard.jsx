import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { accounts, transactions } from '../actions/bank';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('inside componentDidMount, should only see once');
    this.props.getAccounts();
    this.props.getTransactions();
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Tabs>
          <Tab label="Trial Tab">

          </Tab>
        </Tabs>
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
    getAccounts: (...args) => dispatch(accounts(...args)),
    getTransactions: (...args) => dispatch(transactions(...args)),
    // accessTokenFailure: (...args) => dispatch(accessTokenFailure(...args)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
