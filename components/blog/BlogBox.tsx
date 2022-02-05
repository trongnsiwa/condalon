import Navbar from "@components/Navbar";
import React from "react";
import { Container } from "react-bootstrap";

interface LayoutProps {
  key: React.ReactNode;
  id: React.ReactNode;
  slug: React.ReactNode;
  imageUrl: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

function BlogBox({ key, id, slug, imageUrl,title, description }: LayoutProps) {
  return (
    <>
      
    </>
  );
}

export default BlogBox;
