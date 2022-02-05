import { Nav, Navbar as BNavbar } from "react-bootstrap";

import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "@components/SearchBar";
import Link from "next/link";

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
            <Nav.Item>
              <Link href="/home">Trang chủ</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/blog">Blog</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/introduce">Giới thiệu</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about-us">Chúng tôi là</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact">Liên hệ</Link>
            </Nav.Item>
            <SearchBar />
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
