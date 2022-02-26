import Layout from "@components/layouts/Layout";
import SharedForm from "@components/SharedForm";
import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Layout title="Liên Hệ">
      <Container className="contact">
        <div className="contact-left">
          <img
            src="https://images.unsplash.com/photo-1620656068208-e192263b7c11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="contact-right">
          <SharedForm />
        </div>
      </Container>
    </Layout>
  );
}

export default Contact;
