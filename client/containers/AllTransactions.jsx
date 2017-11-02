import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TransactionItem from '../components/TransactionItem.jsx';
import { filterTransactions } from '../util/filters';

class AllTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debit: true,
      credit: true,
      transactions: this.props.bank.transactions,
    }
  }

  filterDebit = () => {
    let filteredTransactions = filterTransactions(this.props.bank.transactions, !this.state.debit, this.state.credit)
    this.setState({
      debit: !this.state.debit,
      transactions: filteredTransactions,
    });
  }

  filterCredit = () => {
    let filteredTransactions = filterTransactions(this.props.bank.transactions, this.state.debit, !this.state.credit)
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
      <Grid fluid>
        <Row>
          <h1>Transactions</h1>
        </Row>
        <Row around="lg">
          <Col lg={8}>
            <List>
              {transactionsList}
            </List>
          </Col>
          <Col lg={4}>
            <Row end="lg">
              <Col lg={5}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  }
}

export default connect(mapStateToProps)(AllTransactions);
