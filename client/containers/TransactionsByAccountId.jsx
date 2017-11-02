import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TransactionItem from '../components/TransactionItem.jsx';
import { filterTransactionsByAccountId } from '../util/filters';

class TransactionsByAccountId extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debit: true,
      credit: true,
      accountId: props.accountId,
      transactions: filterTransactionsByAccountId(this.props.bank.transactions, props.accountId, true, true),
    }
  }

  filterDebit = () => {
    // console.log('debit', this.state.debit);
    let filteredTransactions = filterTransactionsByAccountId(this.props.bank.transactions, this.state.accountId, !this.state.debit, this.state.credit)
    this.setState({
      debit: !this.state.debit,
      transactions: filteredTransactions,
    });
  }

  filterCredit = () => {
    let filteredTransactions = filterTransactionsByAccountId(this.props.bank.transactions, this.state.accountId, this.state.debit, !this.state.credit)
    this.setState({
      credit: !this.state.credit,
      transactions: filteredTransactions,
    });
  }


  render() {
    let transactionsList = this.state.transactions.map(transaction => {
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
        <div>
          <Checkbox
            label="Debit (+)"
            checked={this.state.debit}
            onCheck={() => this.filterDebit()}
          />
          <br />
          <Checkbox
            label="Credit (-)"
            checked={this.state.credit}
            onCheck={() => this.filterCredit()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  }
}

export default connect(mapStateToProps)(TransactionsByAccountId);
