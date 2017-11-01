import React, { Component } from 'react';
import { Tab } from 'material-ui/Tabs';

class AccountTab extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Tab>
        <h1>Hello Account {this.props.account}</h1>
      </Tab>
    );
  }
}

export default AccountTab;
