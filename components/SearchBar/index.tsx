import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchBar.module.scss";
function SearchBar() {
  return (
    <Form>
      <label className={styles.search_bar}>
        <input
          type="text"
          className={styles.search_bar_input}
          defaultValue=""
          placeholder="Tìm kiếm"
          aria-label="Search"
        />
        <button type="button" className={styles.search_bar_btn}>
          <AiOutlineSearch className={styles.search_bar_btn_icon} />
        </button>
      </label>
    </Form>
  );
}

export default SearchBar;
