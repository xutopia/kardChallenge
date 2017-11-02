import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TransactionsByAccountId from './TransactionsByAccountId.jsx';

// FIXME: probably better for this component to be stateless. Will fix if there is time.

class AccountTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      officialName: props.officialName,
      accountId: props.accountId,
      subType: props.subType,
      mask: props.mask,
    }
  }



  render() {
    return (
      <Grid fluid>
        <Row>
          <h1>{this.state.officialName}</h1>
        </Row>
        <Row>
          <h3>{this.state.subType}  {this.state.mask}</h3>
        </Row>
        <br />
        <TransactionsByAccountId accountId={this.state.accountId} />
      </Grid>
    );
  }
}

export default AccountTab;
