import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="spinner-border mb-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
