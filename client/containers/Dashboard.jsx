import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { accounts, transactions } from '../actions/bank';
import AccountTab from '../containers/AccountTab.jsx';
import AllTransactions from './AllTransactions.jsx';
import Overview from '../components/Overview.jsx';
import { calculateAccountsTotal } from '../util/totals';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAccounts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.bank.accounts.length > 0 && nextProps.bank.transactions.length === 0) {
      this.props.getTransactions();
    }
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
