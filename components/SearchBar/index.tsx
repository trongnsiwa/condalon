import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchBar.module.scss";

function SearchBar() {
  return (
    <label className={styles.search_bar}>
      <input
        type="text"
        className={styles.search_bar_input}
        defaultValue=""
        placeholder="Tìm kiếm"
      />
      <button type="button" className={styles.search_bar_btn}>
        <AiOutlineSearch className={styles.search_bar_btn_icon} />
      </button>
    </label>
  );
}

export default SearchBar;
