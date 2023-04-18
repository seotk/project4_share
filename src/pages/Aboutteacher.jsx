import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import location from "./location";

function About() {
  let [locatoinList] = useState(location);
  let [chooseGu, setChooseGu] = useState([]);
  let [allData, setAllData] = useState([]);
  let [data, setData] = useState([]);
  let [data2, setData2] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(
        "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
      )
      .then((res) => {
        console.log("전체 142--", res.data.response.body.items);
        setAllData(res.data.response.body.items);
        setData([...res.data.response.body.items]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchGu = (e) => {
    const inputText = e.target.value.trim();
    setChooseGu(locatoinList[inputText]);
    setData(
      inputText === "구전체"
        ? [...allData]
        : [...allData].filter((a) => a.tourspotDtlAddr.includes(inputText))
    );
    setData2(
      inputText === "구전체"
        ? [...allData]
        : allData.filter((a) => a.tourspotDtlAddr.includes(inputText))
    );
    setCurrentPage(1);
    console.log(data);
    console.log(data2);
  };

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();
    setData(
      inputText2 === "전체"
        ? [...data2]
        : data2.filter((a) => a.tourspotDtlAddr.includes(inputText2))
    );
    setCurrentPage(1);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFrirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="mw">
      <h1>구 입력</h1>
      <div className="">
        <select onChange={handleSearchGu} name="name1" id="">
          <option value="구전체">구전체</option>
          <option value="서구">서구</option>
          <option value="중구">중구</option>
          <option value="동구">동구</option>
          <option value="유성구">유성구</option>
          <option value="대덕구">대덕구</option>
        </select>
        <select onChange={handleSearchDong} name="name2">
          <option value="전체">전체</option>
          {chooseGu.map((key, i) => (
            <option key={i} value={key}>
              {key}
            </option>
          ))}
        </select>

        {data.length === 0 && <p>결과가 존재하지 않습니다.</p>}
      </div>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          {currentData.map((a, i) => (
            <section key={i} className="result">
              <p>{a.tourspotNm}</p>
              {/* <p>{a.tourspotDtlAddr}</p> */}
            </section>
          ))}
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
export default About;
