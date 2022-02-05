import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="footer-inner">
        {/* heading */}
        <h1 className="footer-inner_heading">Bố Mẹ Ơi, Con Đã Lớn</h1>
        {/* description */}
        <p className="footer-inner_desc">
          Website tuyên truyền ủng hộ quyền thanh thiếu nhiên được tự do theo đuổi giấc mơ của mình,
          không chịu sự sắp đặt bởi gia đình
        </p>
        {/* social links */}
        <div className="footer-inner-socials"></div>
        {/* navbar */}
        <div className="footer-inner-links"></div>
      </div>
      <div className="footer-bottom">
        {/* copyright */}
        <p>Copyright &copy; 2022 Lọ Đựng Sao </p>
      </div>
    </div>
  );
}

export default Footer;
