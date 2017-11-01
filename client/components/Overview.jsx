import React from 'react';
import Paper from 'material-ui/Paper';


const Overview = (props) => {
  return (
    <Paper style={styleLocal} zDepth={props.depth}>
      <h1>hello paper</h1>
    </Paper>
  );
}

const styleLocal = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default Overview;
