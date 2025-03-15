import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactTyped } from 'react-typed';
import BlogList from '../components/BlogList';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import blogPosts from '../data/blogPosts.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts.slice(0, 3)); // Get the 3 most recent posts
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <Helmet>
        <title>Dizzy Otter Blog - Home</title>
        <meta name="description" content="Welcome to Dizzy Otter Blog, your go-to place for all things web development, design, and more." />
        <meta name="keywords" content="web development, design, programming, marketing" />
        <link rel="icon" href="/path/to/favicon.ico" />
      </Helmet>
      <header className="home-header">
        <h1>Welcome to Dizzy Otter Blog</h1>
        <p>Your go-to place for all things:</p>
        <ReactTyped
          strings={[
            'Web Development',
            'Design',
            'Programming',
            'Sales',
            'Acquiring Clients',
            'Marketing',
            'SEO',
            'Social Media',
            'Content Creation',
            'Email Marketing',
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
          className="typed-text"
        />
      </header>
      <div className="main-content">
        <section className="about-section">
          <Link to="/about">
            <h2>About Us</h2>
          </Link>
          <p>Learn more about our mission and the team behind Dizzy Otter Blog.</p>
        </section>
        <section className="latest-posts-section">
          <h2>Latest Posts</h2>
          <BlogList searchQuery={searchQuery} />
        </section>
      </div>
      <SearchBar posts={blogPosts} onSearch={handleSearch} />
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Get in touch with the Dizzy Otter Blog team.</p>
          <p>Email: <a href="mailto:contact@dizzyotterdesigns.com">contact@dizzyotterdesigns.com</a></p>
          <p>Visit our website: <a href="https://www.dizzyotterdesigns.com" target="_blank" rel="noopener noreferrer">dizzyotterdesigns.com</a></p>
          <p>We build custom websites tailored to your needs. Contact us to learn more!</p>
          <div className="phone-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;