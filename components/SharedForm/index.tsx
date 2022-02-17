import { Formik, Form as FForm, Field, FormikValues, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

import styles from "./SharedForm.module.scss";

function SharedForm() {
  const initFormData = {
    fullname: "",
    email: "",
    title: "",
    message: ""
  };
  const [submitMessage, setSubmitMessage] = useState("");

  const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("Trường này là bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Trường này là bắt buộc"),
    title: Yup.string().required("Trường này là bắt buộc"),
    message: Yup.string().required("Trường này là bắt buộc")
  });

  const sendMessage = (values: any, actions: any) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          actions.resetForm();
          actions.setSubmitting(false);
          setSubmitMessage(
            "Cảm ơn lời chia sẻ của bạn! 😚 Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!"
          );
        }
      })
      .catch(() => {
        setSubmitMessage(
          "Hiện tại bạn không thể gửi lời chia sẻ đến chúng tôi! 😓 Xin lỗi vì sự bất tiện này!"
        );
      });
  };

  return (
    <Formik initialValues={initFormData} onSubmit={sendMessage} validationSchema={contactSchema}>
      {({ touched, errors, isSubmitting, dirty, isValid, values }) => (
        <FForm className={styles.form} onFocus={() => setSubmitMessage("")}>
          {submitMessage && <p>{submitMessage}</p>}
          <Field name="fullname">
            {({ field, form }: { field: any; form: FormikValues }) => (
              <Form.Group className={styles.form_group} controlId="formBasicFullname">
                <Form.Control
                  type="text"
                  placeholder="Nhập Họ và Tên..."
                  {...field}
                  className={touched.fullname && errors.fullname ? styles.form_group_error : ""}
                />
                <ErrorMessage
                  component="div"
                  name="fullname"
                  className={styles.form_group_message}
                />
              </Form.Group>
            )}
          </Field>

          <Field name="email">
            {({ field, form }: { field: any; form: FormikValues }) => (
              <Form.Group className={styles.form_group} controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Nhập địa chỉ Email..."
                  {...field}
                  className={touched.email && errors.email ? styles.form_group_error : ""}
                />
                <ErrorMessage component="div" name="email" className={styles.form_group_message} />
              </Form.Group>
            )}
          </Field>

          <Field name="title">
            {({ field, form }: { field: any; form: FormikValues }) => (
              <Form.Group className={styles.form_group} controlId="formBasicTopic">
                <Form.Control
                  type="text"
                  placeholder="Nhập chủ đề..."
                  {...field}
                  className={touched.title && errors.title ? styles.form_group_error : ""}
                />
                <ErrorMessage component="div" name="title" className={styles.form_group_message} />
              </Form.Group>
            )}
          </Field>

          <Field name="message">
            {({ field, form }: { field: any; form: FormikValues }) => (
              <Form.Group className={styles.form_group} controlId="formBasicTopic">
                <Form.Control
                  as="textarea"
                  placeholder="Nhập lời chia sẻ của bạn..."
                  {...field}
                  className={touched.message && errors.message ? styles.form_group_error : ""}
                />
                <ErrorMessage
                  component="div"
                  name="message"
                  className={styles.form_group_message}
                />
              </Form.Group>
            )}
          </Field>

          <button className="btn-app" type="submit" disabled={!dirty || !isValid}>
            {isSubmitting ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Gửi"
            )}
          </button>
        </FForm>
      )}
    </Formik>
  );
}

export default SharedForm;
