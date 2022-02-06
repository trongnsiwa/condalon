import BlogDetailBox  from '@components/blog_detail'
import { Entry } from 'contentful';
import { IBlogPostFields } from 'contentful/__generated__/types';

import React, { useEffect, useState } from 'react';
import { BlogApi } from 'services/blog';

const api = new BlogApi();

export async function getStaticPaths() {
    let data = await api.fetchBlogEntries();
    return {
        paths: data.map(item => ({
            params: { slug: item.fields.slug }
        }))
    };
}

export async function getStaticProps({ params }) {
    let blogContent = await api.searchBlog({
        content_type: "blogPost",
        "fields.slug": params.slug,
      });
    let recommendBlog = await api.searchBlog({
        content_type: "blogPost",
        "fields.slug[ne]": params.slug,
        order: 'sys.createdAt',
    })
    return {
        props: {
            blogContent: blogContent[0],
            recommendBlog: recommendBlog
        }
    }
}

const BlogDetail = ({ blogContent, recommendBlog }) => {
    return (
        <>
          
        </>
      );
}

export default BlogDetail;