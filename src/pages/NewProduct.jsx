import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';

function NewProduct(props) {
  console.log(props.list);
  let dataList = props.list;
  console.log("asdaqwrfwqgfagf", dataList);
  return (
    <section className="sec2 mw">
      <h1>
        <span>NEW </span>
        <span>PRODUCTS</span>
      </h1>

      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        className="newList"
      >
        {dataList.map((a, i) => {
          return (
            <>
              <SwiperSlide key={i}>
                <div className="pCon">
                  <div className="pImg">
                    {a.discount !== 0 ? (
                      <span className="pLabel">{a.discount}%</span>
                    ) : null}

                    <img src={a.img} alt={a.title} />
                  </div>
                  <div className="pTitle">{a.title}</div>
                  <Link to={`/detail/${a.id}`} className="detailBtn"></Link>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
}

export default NewProduct;
