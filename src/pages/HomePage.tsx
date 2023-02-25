import "./HomePage.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookPreview = (book: any) => {
  return (
    <Link to={"book/" + book["ISBN-13"]}>
      <div className="book-preview" key={book["ISBN-13"]}>
        <img src={book.coverImageUrl} />
        <h3>{book.title}</h3>
        <div>{book.author}</div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  useEffect(() => {}, []);

  const onButtonClick = () => {
    alert("button clicked");
  };

  return (
    <div className="content">
      <h2>Popular books</h2>
      <div className="books-grid">{data.books.map(BookPreview)}</div>
    </div>
  );
};

export default HomePage;
