import React from "react";
import { Form } from "react-bootstrap";

import styles from "./SharedForm.module.scss";

function SharedForm() {
  return (
    <Form className={styles.form}>
      <Form.Group className={styles.form_group} controlId="formBasicFullname">
        <Form.Control type="text" placeholder="Nhập Họ và Tên..." />
      </Form.Group>

      <Form.Group className={styles.form_group} controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Nhập địa chỉ Email..." />
      </Form.Group>

      <Form.Group className={styles.form_group} controlId="formBasicTopic">
        <Form.Control type="text" placeholder="Nhập chủ đề..." />
      </Form.Group>

      <Form.Group className={styles.form_group} controlId="formBasicTopic">
        <Form.Control as="textarea" placeholder="Nhập lời chia sẻ của bạn..." />
      </Form.Group>

      <button className="btn-app" type="submit">
        Gửi
      </button>
    </Form>
  );
}

export default SharedForm;
