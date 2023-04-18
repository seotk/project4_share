import axios from "axios";
import { useState, useEffect } from "react";
import location from "./location";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tour from "./Tour";
import Food from "./Food";
import Shopp from "./Shopp";
import Room from "./Room";

function About() {
  let [locatoinList] = useState(location);
  let [chooseGu, setChooseGu] = useState([]);
  let [allData, setAllData] = useState();
  let [data, setData] = useState();
  let [data2, setData2] = useState();
  let [isLoading, setIsLoading] = useState(true);
  const [dataT, setDataT] = useState([]);
  const [dataR, setDataR] = useState([]);
  const [dataF, setDataF] = useState([]);
  const [dataS, setDataS] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response2 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response3 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response4 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=100"
        );

        const mergedData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );

        setAllData(mergedData);
        setData([...mergedData]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleSearchGu = (e) => {
    const inputText = e.target.value.trim();
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];
    setChooseGu(locatoinList[inputText]);
    setData(
      inputText === "구전체"
        ? [...allData]
        : [...allData].filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          })
    );
    data.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setData2(
      inputText === "구전체"
        ? [...allData]
        : allData.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          })
    );
    data.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setCurrentPage(1);
    console.log(data);
    console.log(data2);
  };

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();
    setData(
      inputText2 === "전체"
        ? [...data2]
        : data2.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText2)
            );
          })
    );
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];

    data.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setCurrentPage(1);
    console.log(data);
    console.log(data2);
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

        {/* {data.length === 0 && <p>결과가 존재하지 않습니다.</p>} */}
      </div>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <Tabs
            defaultActiveKey="관광지"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="관광지" title="관광지">
              <Tour list={dataT} />
            </Tab>
            <Tab eventKey="모범음식점" title="모범음식점">
              <Food list={dataF} />
            </Tab>
            <Tab eventKey="쇼핑" title="쇼핑">
              <Shopp list={dataS} />
            </Tab>
            <Tab eventKey="숙박업소" title="숙박업소">
              <Room list={dataR} />
            </Tab>
          </Tabs>
        </>
      )}
    </section>
  );
}
export default About;
