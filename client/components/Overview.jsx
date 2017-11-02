import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';


const Overview = (props) => {
  return (
    <Paper zDepth={4}>
      <Row center="lg">
        <h1>{props.title}</h1>
      </Row>
      <Row center="lg">
        <h3>$ {props.amount}</h3>
      </Row>
    </Paper>
  );
}

export default Overview;
