import React from "react";
import styles from "./Blog.module.scss";

interface BlogProps {
  image: string;
  title: string;
  publicDate: string;
  owner: string;
  description: string;
}

function BlogItem({ image, title, publicDate, owner, description }: BlogProps) {
  return (
    <div className={styles.blog}>
      <div>
        <h1 className="text-center blog-title">{title}</h1>
        {/* <h4 className="text-center blog-date">
          {publicDate} + Tac gia: {owner}
        </h4> */}
        <h5 className="text-center blog-desc">{description}</h5>
        <img className="blog-img" src={image} />
      </div>
      <div className="blog-line"></div>
    </div>
  );
}

export default BlogItem;
