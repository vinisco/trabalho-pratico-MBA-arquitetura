import { useEffect, useState } from "react";
import { getAll } from "../api/BooksAPI";
import Shelf from "../components/shelf/Shelf";

import { useRefresh } from "../components/context/RefreshProvider";

export default function Home() {
  const [bookList, setBookList] = useState([]);
  const { refresh, setRefresh } = useRefresh();

  useEffect(() => {
    async function fetchData() {
      try {
        const books = await getAll();
        setBookList(books);
      } catch (err) {
        alert(err.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const books = await getAll();
        setBookList(books);
      } catch (err) {
        alert(err.message);
      }
    }
    fetchData();
    return () => {
      setRefresh(false);
    };
  }, [refresh, setRefresh]);

  return (
    <>
      <Shelf
        bookList={bookList}
        shelfName={"currentlyReading"}
        title={"Lendo Atualmente"}
      />
      <Shelf bookList={bookList} shelfName={"wantToRead"} title={"Quero ler"} />
      <Shelf
        bookList={bookList}
        shelfName={"read"}
        title={"Leitura Concluída"}
      />
    </>
  );
}
