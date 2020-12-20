import { useNavigate } from "react-router-dom";

export default function SearchBar({ setFilter }) {
  const navigate = useNavigate();

  function returnToHome() {
    navigate("../home", { replace: true });
  }

  return (
    <div>
      <div className="bg-secondary p-4 text-center  mb-4">
        <div className="row">
          <strong>
            <i
              style={{ cursor: "pointer" }}
              onClick={returnToHome}
              className="fa fa-2x fa-arrow-left ml-4"
              aria-hidden="true"
            ></i>
          </strong>
          <h4 className="ml-4">Buscar Livros:</h4>
          <input
            onChange={(event) => setFilter(event.target.value)}
            type="text"
            className="text-dark w-40 ml-4"
          />
        </div>
      </div>
    </div>
  );
}
