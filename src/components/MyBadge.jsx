import React from "react";
import { Badge } from "reactstrap";

class MyBadge extends React.Component {
  state = {};
  render() {
    return <Badge color={this.props.color}>{this.props.text}</Badge>;
  }
}

export default MyBadge;
