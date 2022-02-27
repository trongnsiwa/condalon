import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./CommentForm.module.scss";

function CommentForm({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const isTextareaDisabled = text.length == 0 || name.length == 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, name);
    setText("");
    setName("");
  };
  return (
    <div className={styles.commentForm}>
      <Form onSubmit={onSubmit}>
        <input
          className="commentForm-commentorName container-fluid"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nhập tên của bạn..."
        />{" "}
        <br />
        <textarea
          className="commentForm-textarea container-fluid"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập bình luận của bạn..."
        />{" "}
        <br />
        <button className="commentForm-btn" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="commentForm-btn commentForm-cancel-button"
            onClick={handleCancel}
          >
            Hủy
          </button>
        )}
      </Form>
    </div>
  );
}

export default CommentForm;
