import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import { Container } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <>
      {title && (
        <NextSeo
          title={`${title} | Bố Mẹ Ơi, Con Đã Lớn | Lọ Đựng Sao Team`}
          description={`Đây là trang ${title} của Bố Mẹ Ơi, Con Đã Lớn. Truy cập ngay để dược truyền cảm hứng về tuổi trẻ và ước mơ!`}
          openGraph={{
            title: `${title} | Bố Mẹ Ơi, Con Đã Lớn | Lọ Đựng Sao Team`,
            description: `Đây là trang ${title} của Bố Mẹ Ơi, Con Đã Lớn. Truy cập ngay để dược truyền cảm hứng về tuổi trẻ và ước mơ!`
          }}
        />
      )}

      <Navbar />

      <main className="main">{children}</main>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
