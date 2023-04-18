import { Link, Outlet, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
// Header.jsx 파일 상단에 다음 코드 추가
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="hd mw">
        <div onClick={handleShow}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <nav className="gnb">
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="logo" />
          </Link>
          <Link to="/Shop">SHOP</Link>
          <Link to="/ESSENTIALS">ESSENTIALS</Link>
          <Link to="/BESTSELLERS">BEST SELLERS</Link>
          <Link to="/ABOUT">ABOUT US</Link>
        </nav>
        <div>개인화 아이콘</div>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>검색</Modal.Title>
        </Modal.Header>
        <Modal.Body>모달</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Header;
