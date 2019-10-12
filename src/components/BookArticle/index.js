import React from "react";
import client from "../../services/client";
import "./BookArticle.css";
import Influencer from "../influencer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
class BookArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: {}, url: "", influencers: [] };
  }
  componentDidMount(props) {
    let influencers = [];
    client
      .getEntries({
        content_type: "book",
        "fields.slug": this.props.match.params.slug
      })
      .then(response => {
        this.setState({
          book: response.items[0].fields,
          url: response.items[0].fields.image.fields.file.url
        });
        console.log(this.state.book);
        response.items[0].fields.influencer.forEach(influencer => {
          influencers.push(influencer);
        });
        return influencers;
      })
      .then(influencers => {
        this.setState({ influencers: influencers });
        return this.state.influencers;
      });
  }
  render() {
    return (
      <div className="BookArticle">
        <div className="container">
          <h1> {this.state.book.title} </h1>
          <p> {`by ${this.state.book.author}`} </p>
          <div className="wrapper">
            <img src={this.state.url} alt={`${this.state.book.title} cover`} />
            <div className="description">
              <h2>🤷 Why read this book?</h2>
              {documentToReactComponents(this.state.book.description)}
            </div>
          </div>
        </div>

        <div className="influencers">
          <div className="container">
            <h3>💖 People with impact who love this book: </h3>
            <div>
              {this.state.influencers.map((influencer, i) => (
                <Influencer
                  key={i}
                  name={influencer.fields.name}
                  description={influencer.fields.description}
                  image={influencer.fields.image.fields.file.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookArticle;
