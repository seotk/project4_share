import Notice from "./Notice";
import NewProduct from "./NewProduct";
import "../css/Main.css";
import Weekly from "./Weekly";
import Top from "./Top";
import Header from './Header';

function Main(props) {
  console.log(props.list);
  return (
    <>
      <section className="mainSection">
        <Notice />
        <NewProduct list={props.list} /> {/**products 를 list로 보낸다 */}
        <Weekly list={props.list} />
        <Top list={props.list} />
      </section>
    </>
  );
}

export default Main;
