import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Link } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function MyChoice() {
  let [tour, setTour] = useState([]);
  let [food, setFood] = useState([]);
  let [count, setCount] = useState(1000);
  let [storage, setStorage] = useState([]);

  const saveDataToLocalStorage = (tourspotNm, tourspotAddr) => {
    const data = { tourspotNm, tourspotAddr };
    localStorage.setItem('selectedTour', JSON.stringify(data));
    setStorage([...storage, data]);
  };
  // const selectedTourData = localStorage.getItem('selectedTour');
  // const selectedTour = JSON.parse(selectedTourData);
  console.log(storage);
  useEffect(() => {
    axios
      .get(
        'https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000'
      )
      .then((res) => {
        setTour([...res.data.response.body.items].splice(0, count));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        'https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000'
      )
      .then((res) => {
        setFood(res.data.response.body.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let inputText = e.target.name.value.trim();
    console.log(inputText);
    setTour(
      inputText === ''
        ? [...tour].splice(0, count)
        : tour.filter((a) => a.tourspotAddr.includes(inputText))
    );
  };

  return (
    <>
      <Link
        to="/"
        className="
      home"
      >
        HOME
      </Link>
      <div className="wrap">
        <div className="left">
          {storage.map((a, i) => {
            return (
              <div className="course" key={i}>
                <p>{i + 1}차</p>
                <div className="choiced">
                  {a.tourspotNm}
                  {a.tourspotAddr}
                </div>
              </div>
            );
          })}
        </div>
        <div className="right">
          <div>
            <form onSubmit={handleSearch}>
              <input type="text" name="name" placeholder="지역을 입력하세요" />
              <button type="submit">검색</button>
            </form>
          </div>
          <Tabs
            defaultActiveKey="관광지"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="관광지" title="관광지">
              {tour.map((a, i) => {
                return (
                  <div
                    className="list"
                    key={i}
                    onClick={() => {
                      saveDataToLocalStorage(a.tourspotNm, a.tourspotAddr);
                    }}
                  >
                    <p>
                      <span>장소:</span>
                      {a.tourspotNm}
                    </p>
                    <p>{a.tourspotAddr}</p>
                  </div>
                );
              })}
            </Tab>
            <Tab eventKey="모범음식점" title="모범음식점">
              {food.length}
              {food.map((a, i) => {
                return (
                  <p key={i}>
                    <span>장소:</span>
                    {a.restrntNm}
                  </p>
                );
              })}
            </Tab>
            <Tab eventKey="쇼핑" title="쇼핑">
              <div>쇼핑</div>
            </Tab>
            <Tab eventKey="숙박업소" title="숙박업소">
              <div>숙박업소</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default MyChoice;
