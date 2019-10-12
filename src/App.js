import React from "react";
import "./App.css";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
import BookArticle from "./components/BookArticle";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/:slug" component={BookArticle}></Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
