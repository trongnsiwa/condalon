import { Nav, Navbar as BNavbar, NavDropdown } from "react-bootstrap";

import styles from "./Navbar.module.scss";

import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "@components/SearchBar";

function Navbar() {
  return (
    <BNavbar bg="app-light" expand="lg" className="shadow">
      <Container>
        <BNavbar.Brand href="#" className="text-center subhead me-auto">
          Bố Mẹ Ơi,
          <br />
          Con Đã Lớn
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Trang chủ</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#introduction">Giới thiệu</Nav.Link>
            <Nav.Link href="#about-us">Chúng tôi là</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
            <SearchBar />
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
