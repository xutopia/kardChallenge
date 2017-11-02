import React, { Component } from 'react';
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
      <div>
        <h1>{this.state.officialName}</h1>

        <h3>{this.state.subType}</h3>
        <h3>{this.state.mask}</h3>
        <br />
        <TransactionsByAccountId accountId={this.state.accountId} />
      </div>
    );
  }
}

export default AccountTab;
