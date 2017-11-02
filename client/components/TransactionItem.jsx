import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';


const TransactionItem = (props) => {
  return (
    <div>
    <ListItem
      primaryText={props.title}
      secondaryText={
        <p>
          <span>{props.amount}</span>
          <br />
          <span>{props.date}</span>
        </p>
      }
      secondaryTextLines={2}
    />
  <Divider />
  </div>
  );
}



export default TransactionItem;
