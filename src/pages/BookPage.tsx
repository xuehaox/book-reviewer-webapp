import { useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>book id: {id}</h2>
      <div>
        Details of a book, including: book cover, title, description, rating,
      </div>
      <div>Book reviews</div>
    </div>
  );
};

export default BookPage;
