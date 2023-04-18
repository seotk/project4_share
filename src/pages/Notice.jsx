import { Link } from "react-router-dom";

function Notice() {
  return (
    <div className="sec1 mw">
      <div className="sec1Con">
        <h1>
          PROVIDING SERVICES <br /> AT YOUR DOOR
        </h1>
        <p>
          <strong>MACC Essentials</strong> has an important role in making
          supplies and services available to customers and their patients during
          this critical time. This includes services from various domains. Our
          aim is to aid you. As much we can.
        </p>
        <Link to="/Collection" className="btn red">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default Notice;
