import { useState } from "react";
import "../css/Shop.css";
import { Link } from "react-router-dom";

function Shop(props) {
  let [newlist, setnewlist] = useState(props.list);
  const change = (input) => {
    return setnewlist(props.list.filter((a) => a.cate2 === input));
  };
  const handleClick = (e) => {
    const value = e.target.textContent;
    change(value);
  };
  const sortProducts = (v) => {
    console.log(v);
    let sortFn = [
      (a, b) => a._id - b._id,
      (a, b) => a.price - b.price,
      (a, b) => b.price - a.price,
      (a, b) => b.discount - a.discount,
    ];
    setnewlist([...newlist].sort(sortFn[v]));
    console.log(newlist);
  };
  return (
    <section className="shopCon mw">
      <div className="topBigImg"></div>
      <nav className="shopLnb">
        <button onClick={() => setnewlist(props.list)}>All</button>
        <button onClick={handleClick}>Everyday Essentials</button>
        <button onClick={handleClick}>Cleaning Essentials</button>
        <button onClick={handleClick}>Vitamin Supplements</button>
        <button onClick={handleClick}>Immunity & Health</button>
      </nav>
      <article className="shopProductList">
        <div className="listFn">
          <p>{newlist.length} Products</p>
          <select
            name="dataChoice"
            onChange={(e) => {
              sortProducts(Number(e.target.value));
            }}
          >
            <option value={0} defaultValue={0}>
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
          <p>{newlist.id + 1}</p>
          <p>{newlist.price}</p>
        </div>
      </div>
      <Link to={`/detail/${newlist.id}`} className="detailBtn"></Link>
    </li>
  );
}

export default Shop;
