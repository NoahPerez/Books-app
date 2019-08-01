import React from "react";

import { Button, Form, FormGroup, Label, Input, Container, Row, Spinner, Alert } from "reactstrap";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        
      comment: {
        
        elementId: "0316438960",
        rate: 1,
        
        
        comment: "Worst Book Ever"
      },
      isLoading: false,
      errMess: ""
    };
  }

  submitComments = async e => {
    e.preventDefault();

    this.setState({
      isLoading: true
    });


    console.log(this.state.comment);
    try {
 
      var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Basic' + ' dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ=='
        }
        
      });
      if (response.ok) {
        var json = await response.json();
        this.setState({
          isLoading: false,
          errMess: "",
          comment: {
            
            phone: "",
            rating: 1,
            smoking: false,
            
            Comment: ""
          }
        });
      } else {
        var json = await response.json();
        this.setState({
          errMess: json.message,
          isLoading: false
        });
      }
    } catch (ex) {
      console.log(ex);
      this.setState({
        errMess: ex.message,
        isLoading: false
      });
    }
  };

  updateComments = input => {
    var comments = this.state.comment;

    var currentId = input.currentTarget.id;

    switch (currentId) {
      case "rating":
        comment[currentId] = parseInt(input.currentTarget.value);
        break;
      case "smoking":
        comment[currentId] = input.currentTarget.checked;
        break;
      default:
        comment[currentId] = input.currentTarget.value;
    }

    // reservation[input.currentTarget.id] =
    //   input.currentTarget.id === "numberOfPersons" ? parseInt(input.currentTarget.value) : input.currentTarget.value;

    // if (input.currentTarget.id === "numberOfPersons") {
    //   reservation[input.currentTarget.id] = parseInt(input.currentTarget.value);
    // } else {
    //   reservation[input.currentTarget.id] = input.currentTarget.value;
    // }

    this.setState({ comments: comments });
  };

  state = {};
  render() {
    return (
      <>
        {this.state.errMess.length > 0 && (
          <Alert color="danger">We encountered a problem while processing your request: {this.state.errMess}</Alert>
        )}

        <Container>
          <h3>Leave your Comment!</h3>

          <div>
            <Row>
              
              <FormGroup className="col-md-6">
                <Label for="phone">Phone</Label>
                <Input
                  type="number"
                  name="phone"
                  id="comment"
                  placeholder="Your phone"
                  value={this.state.comment.comment}
                  onChange={this.updateComment}/>
              </FormGroup>
            </Row>
            <Row>
              <Row className="col-md-6">
                <FormGroup className="col-md-6">
                  <Label for="rating">Rating</Label>
                  <Input
                    type="select"
                    name="rate"
                    id="rate"
                    value={this.state.comment.rate}
                    onChange={this.updateComment}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    
                  </Input>
                </FormGroup>

               
              </Row>

             
            </Row>
            <FormGroup>
              <Label for="specialRequests">Comments</Label>
              <Input
                type="textarea"
                name="text"
                id="comments"
                value={this.state.comment}
                onChange={this.updateComment}
              />
            </FormGroup>
            <Button onClick={this.submitComment}>Submit</Button>
          </div>
        </Container>

        {this.state.isLoading && (
          <div className="container d-flex justify-content-center my-5">
            Leaving Comment, please wait
            <div>
              <Spinner color="success" />
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Comment;