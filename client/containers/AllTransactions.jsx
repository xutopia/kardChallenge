import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import TransactionItem from '../components/TransactionItem.jsx';

class AllTransactions extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let transactions = this.props.bank.transactions;
    let transactionsList = transactions.map(transaction => {
      return (
        <TransactionItem
          key={transaction.transaction_id}
          title={transaction.name}
          amount={transaction.amount}
          date={transaction.date}
        />
      )
    });
    return (
      <div>
        <h1>Transactions</h1>
        <List>
          {transactionsList}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  }
}

export default connect(mapStateToProps)(AllTransactions);
