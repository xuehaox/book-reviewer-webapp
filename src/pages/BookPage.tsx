import "./BookPage.css";
import { useLocation } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const BookPage = () => {
  const location = useLocation();
  const book = location.state?.book;

  return (
    <div className="book-details-container">
      <div className="book-details-cover">
        <img src={book.coverImageUrl} />
      </div>
      <div className="book-details-info">
        <h2>{book["title"]}</h2>

        <div className="info">
          <p>
            <b>Author: </b>
            {book["author"]}
          </p>
          <p>
            <b>Publisher: </b>
            {book["publisher"]}
          </p>
          <p>
            <b>Publication Date: </b>
            {book["publicationDate"]}
          </p>
          <p>
            <b>Language: </b>
            {book["language"]}
          </p>
          <p>
            <b>Pages: </b>
            {book["page"]}
          </p>
        </div>

        <h3>book details:</h3>
        <ShowMoreText>{book["description"]}</ShowMoreText>

        <h3>About the Author:</h3>
        <ShowMoreText>{book["aboutTheAuthor"]}</ShowMoreText>

        <h3>Book reviews</h3>
      </div>
    </div>
  );
};

export default BookPage;
