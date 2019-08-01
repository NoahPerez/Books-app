import React from "react";
import AlertSign from "./AlertSign";
import MyBadge from "./MyBadge";
import fantasyBooks from "../fantasy.json";
import BookList from "./BookList";
import { Input } from "reactstrap";
import Comments from"./Comments";

class BookStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: "",
      starting: 0
    };
  }

  render() {
    return (
      <div className="container">
        <Comments></Comments>
        <AlertSign text="Here I'm balancing by putting only Noah's name" />

        <MyBadge color="warning" text="this badge is a warning" />
        <Input type="text" onChange={filterItem => this.setState({ filterValue: filterItem.currentTarget.value })} />
        <Input type="number" onChange={startingItem => this.setState({ starting: startingItem.currentTarget.value })} />

        <BookList
          books={fantasyBooks
            .filter(book => book.title.includes(this.state.filterValue))
            .splice(this.state.starting, 20)}
        
        />
      </div>
    );
  }
}

export default BookStore;
