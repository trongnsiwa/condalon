import { Nav, Navbar as BNavbar } from "react-bootstrap";

import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "@components/SearchBar";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <BNavbar bg="app-light" expand="lg" className="shadow">
      <Container>
        <Link href="/" passHref>
          <BNavbar.Brand className="text-center subhead me-auto">
            Bố Mẹ Ơi,
            <br />
            Con Đã Lớn
          </BNavbar.Brand>
        </Link>
        <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className={router.pathname.split("?")[0] == "/" ? "active" : ""}>
              <Link href="/">Trang chủ</Link>
            </Nav.Item>
            <Nav.Item className={router.pathname.split("?")[0] == "/blog" ? "active" : ""}>
              <Link href="/blog">Blog</Link>
            </Nav.Item>
            <Nav.Item className={router.pathname.split("?")[0] == "/introduce" ? "active" : ""}>
              <Link href="/introduce">Giới thiệu</Link>
            </Nav.Item>
            <Nav.Item className={router.pathname.split("?")[0] == "/about-us" ? "active" : ""}>
              <Link href="/about-us">Chúng tôi là</Link>
            </Nav.Item>
            <Nav.Item className={router.pathname.split("?")[0] == "/contact" ? "active" : ""}>
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
