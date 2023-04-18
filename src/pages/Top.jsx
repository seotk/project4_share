import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Top(props) {
  let dataList = props.list.filter((a) => a.cate1 === "TOP SELLINGS");

  return (
    <>
      <section className=" template sec4 mw">
        <div className="slide">
          <h1>
            <span>MACC </span>
            <span>TOP SELLINGS</span>
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
                    <div className="pTitle">{a.title}</div>
                    <Link to={`/detail/${a.id}`} className="detailBtn">
                    </Link>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        <div className="secbg"></div>{" "}
      </section>
    </>
  );
}
export default Top;
