import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { accounts, transactions } from '../actions/bank';
import AccountTab from '../components/AccountTab.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAccounts();
    // TODO: can elaborate the getTransactions to allow user to enter certain dates that they want to retrieve transactions for. Not really applicable with only a sandbox plaid account.
    this.props.getTransactions();
  }

  render() {
    let accounts = this.props.bank.accounts;
    if (accounts.length) {
      return (
        <div>
          <h1>Welcome</h1>
          <Tabs>
            {
              accounts.map((account) => {
                return (
                  <Tab key={account.account_id}>
                    <AccountTab account={account} />
                  </Tab>
                );
              })
            }
          </Tabs>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    status: state.status,
    bank: state.bank,
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAccounts: (...args) => dispatch(accounts(...args)),
    getTransactions: (...args) => dispatch(transactions(...args)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
