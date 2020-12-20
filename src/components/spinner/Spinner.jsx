import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="row vh-100 justify-content-md-center align-items-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
