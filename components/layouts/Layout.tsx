import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bố Mẹ Ơi, Con Đã Lớn</title>
      </Head>

      <Navbar />

      <main className="main">{children}</main>

      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
