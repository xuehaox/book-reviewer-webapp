import "./HomePage.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookPreview = (book: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("book/" + book["ISBN-13"], { state: { book: book } });
  };

  return (
    <div onClick={handleClick}>
      <div className="book-preview" key={book["ISBN-13"]}>
        <img src={book.coverImageUrl} />
        <h3>{book.title}</h3>
        <div>{book.author}</div>
      </div>
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className="content">
      <h2>Popular books</h2>
      <div className="books-grid">{data.books.map(BookPreview)}</div>
    </div>
  );
};

export default HomePage;
