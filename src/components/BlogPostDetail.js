import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-detail">
      <h1 className="blog-post-title">{post.title}</h1>
      <div className="blog-post-meta">
        <span className="blog-post-author">By {post.author}</span>
        <span className="blog-post-date">{post.date}</span>
      </div>
      <div className="blog-post-content">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPostDetail;