import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ title, summary, author, date, id }) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post-title">{title}</h3>
      <div className="blog-post-meta">
        <span className="blog-post-author">By {author}</span>
        <span className="blog-post-date">{date}</span>
      </div>
      <div className="blog-post-summary">
        {summary}
      </div>
      <Link to={`/blog/${id}`} className="read-more">Read more</Link>
    </div>
  );
};

export default BlogPost;