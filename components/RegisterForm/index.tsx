import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./RegisterForm.module.scss";

function RegisterForm() {
  return (
    <Form>
      <label className={styles.register_form}>
        <input
          type="text"
          className={styles.register_form_input}
          defaultValue=""
          placeholder="Nhập địa chỉ Email..."
          aria-label="Search"
        />
        <button type="button" className={styles.register_form_btn}>
          ĐĂNG KÝ
        </button>
      </label>
    </Form>
  );
}

export default RegisterForm;
