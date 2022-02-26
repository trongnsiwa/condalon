import { createClient, Entry } from "contentful";
import { IHomeContentFields } from "contentful/__generated__/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import styles from "./Footer.module.scss";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

function Footer() {
  const [footer, setFooter] = useState<Entry<IHomeContentFields>>();

  const getFooter = async () => {
    const { items } = await client.getEntries<IHomeContentFields>({
      content_type: "homeContent",
      "fields.name": "footer"
    });

    setFooter(items[0]);
  };

  useEffect(() => {
    getFooter();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="footer-inner">
        {/* heading */}
        <h2 className="footer-inner_heading">{footer?.fields.title}</h2>
        {/* description */}
        <p className="footer-inner_desc">{footer?.fields.description}</p>
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
          <Link href="/">Trang chủ</Link>
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
