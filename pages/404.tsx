import Image from "next/image";
import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <div className="error-container">
      <Image
        src={"/images/404.jpg"}
        alt="https://www.freepik.com/vectors/business"
        width={700}
        height={500}
      />
      <h1>Trang này không tồn tại</h1>
      <p>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại. Để chúng mình dẫn bạn tới những bài blog mới
        nhất của tụi mình nhé!
      </p>
      <Link href={"/blog"}>
        <button className="btn-app">Đi đến ngay</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
