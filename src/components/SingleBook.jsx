import React from "react";
import { Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";

class SingleBook extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={this.props.book.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.book.title}</CardTitle>
            <CardSubtitle>{this.props.book.asin}</CardSubtitle>
            <CardText>{this.props.book.price}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
