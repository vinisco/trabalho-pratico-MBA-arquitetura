import { useEffect, useState } from "react";
import { getAll } from "../api/BooksAPI";
import BookCard from "../components/book/BookCard";
import SearchBar from "../components/searchBar/SearchBar";
import Spinner from "../components/spinner/Spinner";

import { useRefresh } from "../providers/RefreshProvider";

export default function Search() {
  const [bookList, setBookList] = useState([]);
  const { refresh, setRefresh } = useRefresh();
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const books = await getAll();
        setBookList(
          books.filter(({ title }) => {
            return title.toLowerCase().startsWith(filter.toLocaleLowerCase());
          })
        );
      } catch (err) {
        alert(err.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [filter]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const books = await getAll();
        setBookList(books);
      } catch (err) {
        alert(err.message);
      }
      setIsLoading(false);
    }
    fetchData();
    return () => {
      setRefresh(false);
    };
  }, [refresh, setRefresh]);

  return (
    <>
      <SearchBar setFilter={setFilter} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row">
            <div className="card-deck justify-content-center mx-auto ">
              {bookList.length === 0 ? (
                <h5 className=" mt-5 text-secondary">
                  Nenhum livro corresponde ao filtro: {`"${filter}"`}
                </h5>
              ) : (
                <>
                  <BookCard data={bookList} />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
