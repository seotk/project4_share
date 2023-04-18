import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Detail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

function Detail(props) {
  let { id } = useParams();
  console.log(props.list[id]);
  let dataList = props.list;
  let data = props.list[id];
  let sameCate2 = props.list.filter((a) => a.cate2 === data.cate2);
  return (
    <section className="detailSection">
      <div className="breadcrumb">
        <Link to="/">HOME</Link>
        <Link to="/Shop">Shop</Link>
      </div>
      <div className="bigImg">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="detailCon">
        <div>
          <span>상품명:</span> {data.title}
        </div>
        <div>
          <span>상품가격:</span> {data.price}
        </div>
        <div>
          <span>할인률 :</span>
          {data.discount}
        </div>
        <div>
          <span>카테고리</span>
          {data.cate2}
        </div>
      </div>
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
        {sameCate2.map((a, i) => {
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
                  <Link
                    to={`/detail/${a.id}`}
                    className="detailBtn detailPage"
                  ></Link>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
}
export default Detail;
