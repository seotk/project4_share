import axios from "axios";
import React, { useState, useEffect } from "react";
// 추가
import Pagination from "./Pagination";

function Sample() {
  let [allData, setAllData] = useState([]);
  let [data, setData] = useState([]);
  // let [count, setCount] = useState(20);
  let [isLoading, setIsLoading] = useState(true);

  // 추가
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(20);

  useEffect(() => {
    axios
      .get(
        "https://api.odcloud.kr/api/15111391/v1/uddi:19c0c9ab-ac89-486b-b4b8-b026506dc3fa?page=1&perPage=1000&serviceKey=FuLQjO4LFgN%2B9lLvTfVd1atZGw5ECdBsTbQaK0l4mjfWNYMOhlemISLDcj0EaNpNQAXmanXATv7BcUG8Q6LYPQ%3D%3D"
      )
      .then((res) => {
        console.log(res.data.data);
        setAllData(res.data.data);
        // setData([...res.data.data].splice(0, count))
        setData([...res.data.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let inputText = e.target.name1.value.trim();
    setData(
      inputText === ""
        ? // ? [...allData].splice(0, count)
          [...allData]
        : allData.filter((a) => a["시군구 명칭"] === inputText)
    );
    document.querySelector(".name1").value = "";
    setCurrentPage(1);
  };

  // 추가
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="mw">
      <h1>유아동반 가능한 시설 확인</h1>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="name1"
            className="name1"
            placeholder="지역을 입력하세요 예)서구"
          />
          <button type="submit">검색</button>
        </form>
        {data.length === 0 ? <p>검색결과가 없습니다.</p> : null}
      </div>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          {currentData.map((a, i) => {
            return (
              <p key={i}>
                {a.시설명} / {a["시도 명칭"]}
              </p>
            );
          })}
          {/* <button onClick={() => setCount(count + 10)}>더보기</button> */}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}
export default Sample;
