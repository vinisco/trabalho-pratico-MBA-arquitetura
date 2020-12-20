import { useEffect, useState } from "react";
import BookCard from "../book/BookCard";

export default function Shelf({ bookList, shelfName, title }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    var newData = bookList.filter(({ shelf }) => {
      return shelf === `${shelfName}`;
    });
    setFilteredBooks(newData);
  }, [bookList, shelfName]);

  return (
    <>
      <div className="bg-secondary p-1 text-center mt-4 mb-4">
        <h3 className=" text-center text-light">{title}</h3>
      </div>
      <div className="row">
        <div className="card-deck justify-content-center mx-auto ">
          <BookCard data={filteredBooks} />
        </div>
      </div>
    </>
  );
}
