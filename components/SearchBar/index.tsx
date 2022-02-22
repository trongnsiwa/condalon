import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchBar.module.scss";
function SearchBar({handleSubmit}) {
  const [searchText, setSearchText] = useState("");
  const onClick = event => {
    event.preventDefault();
    handleSubmit(searchText);
  }
  return (
    <Form>
      <label className={styles.search_bar}>
        <input
          type="text"
          className={styles.search_bar_input}
          placeholder="Tìm kiếm"
          aria-label="Search"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" className={styles.search_bar_btn} onClick={onClick}>
          <AiOutlineSearch className={styles.search_bar_btn_icon} />
        </button>
      </label>
    </Form>
  );
}

export default SearchBar;
