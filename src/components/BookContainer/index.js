import React from "react";
import Book from "../Book";
import "./BookContainer.css";
function BookContainer(props) {
  return (
    <div className="BookContainer">
      <div>
        <h2> Our 12 recommended books</h2>
        <p>Start a year full of potential</p>
        <div className="container">
          {props.books.map((book, i) => (
            <Book
              key={i}
              number={i + 1}
              title={book.fields.title}
              author={book.fields.author}
              image={book.fields.image.fields.file.url}
              slug={book.fields.slug}
              affiliateLink={book.fields.affiliate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default BookContainer;
