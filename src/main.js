import React from "react";
import Header from "./components/header";
import BookContainer from "./components/BookContainer";
import client from "./services/client";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    client.getEntries({ content_type: "book" }).then(response => {
      this.setState({ books: response.items });
      console.log(response.items);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <BookContainer books={this.state.books} />
      </div>
    );
  }
}
export default Main;
