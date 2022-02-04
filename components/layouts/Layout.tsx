import Navbar from "@components/Navbar";
import React from "react";
import { Container } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container className="mt-5">{children}</Container>
    </>
  );
}

export default Layout;
