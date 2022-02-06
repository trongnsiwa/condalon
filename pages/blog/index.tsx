import BlogBox  from '@components/blog_box';
import { Entry } from 'contentful';
import { IBlogPostFields } from 'contentful/__generated__/types';

import React, { useEffect, useState } from 'react';
import { BlogApi } from 'services/blog';


const Blog = () => {
  const [blogEntries, setBlogEntries] = useState<Entry<IBlogPostFields>[]>();

  const getBlogEntries = async () => {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    setBlogEntries(entries);
  };

  useEffect(() => {
    getBlogEntries();
  }, []);

  return (
    <>
      
    </>
  );
};

export default Blog;
