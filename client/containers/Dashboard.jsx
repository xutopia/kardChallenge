import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
        <Grid fluid>
          <Row>
            <h1>Welcome to the Dashboard</h1>
          </Row>
          <Row center="lg">
            <Col lg={6}>
              <Overview title="Debit" amount={calculateAccountsTotal(accounts, 'debit')} />
            </Col>
            <Col lg={6}>
              <Overview title="Credit" amount={calculateAccountsTotal(accounts, 'credit')} />
            </Col>
          </Row>
          <br />
          <Tabs>
            <Tab label="All Transactions">
              <AllTransactions />
            </Tab>
            {
              accounts.map((account) => {
                return (
                  <Tab
                    key={account.account_id}
                    label={account.name}
                  >
                    <AccountTab
                      officialName={account.official_name}
                      accountId={account.account_id}
                      subType={account.subtype}
                      mask={account.mask}
                    />
                  </Tab>
                );
              })
            }
          </Tabs>
        </Grid>
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
