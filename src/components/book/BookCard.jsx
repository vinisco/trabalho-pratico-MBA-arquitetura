import React from "react";
import Dropdown from "../dropdown/Dropdown";

export default function BookCard({ data }) {
  return (
    <>
      {data.map(({ title, imageLinks, authors, id }) => {
        return (
          <div
            key={id}
            className="card m-2"
            style={{ minWidth: "12rem", maxWidth: "12rem" }}
          >
            <img
              className="card-img-top pt-4 pl-4 pr-4 "
              src={imageLinks.smallThumbnail}
              alt={title}
            />
            <Dropdown id={id} />
            <div style={{ textSize: "10px" }} className="card-body">
              <p className="card-text">
                Título: <strong>{title}</strong> <br />
                Autor: <strong>{authors[0]}</strong>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
