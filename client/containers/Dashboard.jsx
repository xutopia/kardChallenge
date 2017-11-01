import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { accounts, transactions } from '../actions/bank';
import AccountTab from '../containers/AccountTab.jsx';
import AllTransactions from '../containers/AllTransactions.jsx';
import Overview from '../components/Overview.jsx';
import { calculateAccountsTotal } from '../util/totals';

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
    let transactions = this.props.bank.transactions;
    if (accounts.length > 0 && transactions.length > 0) {
      return (
        <div>
          <h1>Welcome to the Dashboard</h1>
          <Overview title="Debit" amount={calculateAccountsTotal(accounts, 'debit')} />
          <Overview title="Credit" amount={calculateAccountsTotal(accounts, 'credit')} />
          <Tabs>
            <Tab label="All Transactions">
              <AllTransactions />
            </Tab>
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
      return (<div></div>);
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
