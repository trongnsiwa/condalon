import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";

import styles from "./RegisterForm.module.scss";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const registerEmail = () => {
    if (email === "") return;

    setIsSubmitting(true);

    fetch("/api/registerEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setEmail("");
          setSubmitMessage(
            "Cảm ơn bạn đã đăng ký nhận bài viết thông qua email! Hãy đón chờ các bài viết tới từ Lọ Đựng Sao nhé!"
          );
        }
        setIsSubmitting(false);
        setEmail("");
      })
      .catch(() => {
        setSubmitMessage(
          "Hiện tại bạn không thể dăng ký email đến chúng tôi! 😓 Xin lỗi vì sự bất tiện này!"
        );
        setIsSubmitting(false);
      });
  };

  return (
    <Form>
      <label className={styles.register_form}>
        <input
          type="text"
          className={styles.register_form_input}
          defaultValue=""
          placeholder="Nhập địa chỉ Email..."
          aria-label="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            setSubmitMessage("");
          }}
        />

        <button type="button" className={styles.register_form_btn} onClick={registerEmail}>
          {isSubmitting ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "ĐĂNG KÝ"
          )}
        </button>
      </label>
      <p className={styles.register_form_message}>{submitMessage}</p>
    </Form>
  );
}

export default RegisterForm;
