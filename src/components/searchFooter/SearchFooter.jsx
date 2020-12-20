import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchFooter() {
  const navigate = useNavigate();

  function goToSearch() {
    navigate("../search", { replace: true });
  }

  return (
    <>
      <strong>
        <i
          style={{ cursor: "pointer" }}
          onClick={goToSearch}
          className="fa fa-5x fa-search ml-4"
          aria-hidden="true"
        ></i>
      </strong>
    </>
  );
}
