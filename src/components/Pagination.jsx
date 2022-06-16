import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const {page, numOfPages, getNextPage, getPrevPage} = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {numOfPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
