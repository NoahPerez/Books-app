import React from "react";
import { Alert } from "reactstrap";

class AlertSign extends React.Component {
  state = {};
  render() {
    return <Alert color="danger">{this.props.text}</Alert>;
  }
}

export default AlertSign;
