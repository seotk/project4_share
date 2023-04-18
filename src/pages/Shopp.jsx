import Pagination from "./Pagination";
import { useState } from "react";

function Shopp({ list }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentData.map((a, i) => {
        return (
          <p key={i}>
            <span>장소:</span>
            {a.shppgNm}
            {a.shppgAddr}
          </p>
        );
      })}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
export default Shopp;
