import { useState } from "react";
import "../css/Shop.css";

function Shop(props) {
  let [newlist, setnewlist] = useState(props.list);
  let arr = [
    { Everyday: "Everyday Essentials" },
    { Cleaning: "Cleaning Essentials" },
    { Immunity: "Immunity & Health" },
    { Everyday: "Vitamin Supplements" },
  ];
  console.log(arr);
  // arr.map((a,i)=>{
  //   let a[key] = props.list.filter((a) => a.cate2 === arr);
  // })

  return (
    <section className="shopCon mw">
      <div className="topBigImg"></div>
      <nav className="shopLnb">
        <button
          onClick={() => {
            setnewlist(props.list);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setnewlist(Everyday);
          }}
        >
          Everyday Essentials
        </button>
        <button
          onClick={() => {
            setnewlist(Cleaning);
          }}
        >
          Cleaning Essentials
        </button>
        <button
          onClick={() => {
            setnewlist(Immunity);
          }}
        >
          Immunity & Health
        </button>
        <button
          onClick={() => {
            setnewlist(Vitamin);
          }}
        >
          Vitamin Supplements
        </button>
      </nav>
      <article className="shopProductList">
        <div className="listFn">
          <p>{newlist.length} Products</p>
          <select
            name="dataChoice"
            id=""
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value == 0) {
                setnewlist(
                  [...newlist].sort((a, b) => {
                    return a.id - b.id;
                  })
                );
              } else if (e.target.value == 1) {
                setnewlist(
                  [...newlist].sort((a, b) => {
                    return a.price - b.price;
                  })
                );
              } else if (e.target.value == 2) {
                setnewlist(
                  [...newlist].sort((a, b) => {
                    return b.price - a.price;
                  })
                );
              } else if (e.target.value == 3) {
                setnewlist(
                  [...newlist].sort((a, b) => {
                    return b.discount - a.discount;
                  })
                );
              }
            }}
          >
            <option value={0} defaultValue={0}>
              {" "}
              최신순
            </option>
            <option value={1}> 가격 낮은 순</option>
            <option value={2}> 가격 높은 순</option>
            <option value={3}> 할인율 높은 순</option>
          </select>
        </div>
        <ul className="listCon">
          {newlist.map((a, i) => {
            return <Card list={a} key={i} />;
          })}
        </ul>
      </article>
    </section>
  );
}

function Card(props) {
  let newlist = props.list;
  return (
    <li className="list">
      <div className="pCon">
        <div className="pImg">
          {newlist.discount !== 0 ? (
            <span className="pLabel">{newlist.discount}%</span>
          ) : null}
          <img src={newlist.img} alt={newlist.title} />
        </div>
        <div className="pTitle">
          <p>{newlist.title}</p>
          <p>{newlist.price}</p>
        </div>
      </div>
    </li>
  );
}

export default Shop;
