import React from "react";
import { update } from "../../api/BooksAPI";

import { useRefresh } from "../context/RefreshProvider";

export default function DropdownButton({ title, newShelf, id }) {
  const { setRefresh } = useRefresh();
  async function changeBookShelf() {
    await update(id, newShelf);
    setRefresh(true);
  }

  return (
    <>
      <button onClick={changeBookShelf} className="dropdown-item" type="button">
        {title}
      </button>
    </>
  );
}
