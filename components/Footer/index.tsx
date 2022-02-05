import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer-inner">
        {/* heading */}
        <h2 className="footer-inner_heading">Bố Mẹ Ơi, Con Đã Lớn</h2>
        {/* description */}
        <p className="footer-inner_desc">
          Website tuyên truyền ủng hộ quyền thanh thiếu nhiên được tự do theo đuổi giấc mơ của mình,
          không chịu sự sắp đặt bởi gia đình
        </p>
        {/* social links */}
        <div className="footer-inner_socials">
          <a href="https://www.facebook.com/bomeoicondalon">
            <BsFacebook className="socials-icon facebook" size={45} />
          </a>
          <a href="mailto:lodungsao@gmail.com">
            <HiMail className="socials-icon" size={45} />
          </a>
        </div>
        {/* navbar */}
        <div className="footer-inner_links">
          <Link href="/home">Trang chủ</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/introduce">Giới thiệu</Link>
          <Link href="/about-us">Chúng tôi là</Link>
          <Link href="/contact">Liên hệ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        {/* copyright */}
        <p>Copyright &copy; 2022 Lọ Đựng Sao </p>
      </div>
    </footer>
  );
}

export default Footer;
