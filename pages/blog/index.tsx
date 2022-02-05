import BlogBox  from '@components/blog/BlogBox';

import React from 'react';
import { BlogPost } from 'services/blog.types';
import { BlogApi } from 'services/blog';


type BlogPageProps = {
  entries: Array<BlogPost>;
};

export default class BlogPage extends React.Component<BlogPageProps> {
    static async getInitialProps() {
        const api = new BlogApi();
        const entries = await api.fetchBlogEntries();
        return { entries };
      }
    renderBlogList = entries =>
      entries.map((entry, i) => {
        return (
          <BlogBox
            key={i}
            id={entry.id}
            slug={entry.slug}
            imageUrl={entry.heroImage.imageUrl}
            title={entry.title}
            description={entry.description}
          />
        );
      });
    render() {
        const {entries} = this.props;
    return (
        <div className="row mt-3">
          {entries.length > 0 && this.renderBlogList(entries)}
        </div>
    );
  }
}