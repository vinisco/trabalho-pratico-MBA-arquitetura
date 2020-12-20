import React from "react";
import DropdownButton from "../dropdownButton/DropdownButton";

export default function Dropdown({ id }) {
  return (
    <>
      <div className="d-flex flex-row-reverse mt-2 mb-2">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle self-align-right bg-dark"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <DropdownButton
              id={id}
              title="Lendo Atualmente"
              newShelf={"currentlyReading"}
            />
            <DropdownButton id={id} title="Quero Ler" newShelf={"wantToRead"} />
            <DropdownButton
              id={id}
              title="Leitura Conluída"
              newShelf={"read"}
            />
            <DropdownButton id={id} title="Nenhum" newShelf={"none"} />
          </div>
        </div>
      </div>
    </>
  );
}
