import React from 'react';
import { Tab } from 'material-ui/Tabs';

const AccountTab = (props) => {
  return (
    <Tab>
      <h1>Hello Account {props.acc}</h1>
    </Tab>
  );
}

export default AccountTab;
