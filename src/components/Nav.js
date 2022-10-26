import React from "react";

const Nav = ({ onNext, onPrev }) => {
  const handlerNext = () => {
    onNext();
  };
  const handlerPrev = () => {
    onPrev();
  };
  return (
    <ul className="pagination justify-content-center">
      <li>
        <button className="page-link" onClick={handlerPrev}>
          Previous
        </button>
      </li>

      <li>
        <button className="page-link" onClick={handlerNext}>
          Next
        </button>
      </li>
    </ul>
  );
};
export default Nav;
