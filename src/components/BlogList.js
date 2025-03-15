import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';
import blogPosts from '../data/blogPosts.json';

const BlogList = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts.slice(0, 3)); // Get the 3 most recent posts
  }, []);

  const filteredPosts = posts.filter(post =>
    (post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.summary && post.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="blog-list">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            summary={post.summary}
            author={post.author}
            date={post.date}
            id={post.id}
          />
        ))
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
};

export default BlogList;