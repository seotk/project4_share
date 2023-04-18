import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Weekly(props) {
  let dataList = props.list.filter((a) => a.cate1 === "WEEKLY DISCOUNT");

  return (
    <>
      <section className=" template sec3 mw">
        <div className="secbg"></div>{" "}
        <div className="slide">
          <h1>
            <span>MACC </span>
            <span>WEEKLY DISCOUNT</span>
          </h1>
          <burron className="btn red">wiew more</burron>
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView={2}
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
                    </div>
                    <div className="pTitle">{a.title}</div>
                    <Link to={`/detail/${a.id}`} className="detailBtn"></Link>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Weekly;
