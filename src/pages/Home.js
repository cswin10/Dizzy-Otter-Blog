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
        <title>Dizzy Otter Blog</title>
        <meta name="description" content="Welcome to Dizzy Otter Blog, your go-to place for all things web development, design, and more." />
        <meta name="keywords" content="web development, design, programming, marketing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#1A7373" />
        <meta property="og:title" content="Dizzy Otter Blog" />
        <meta property="og:description" content="Welcome to Dizzy Otter Blog, your go-to place for all things web development, design, and more." />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.dizzyotterblog.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dizzy Otter Blog" />
        <meta name="twitter:description" content="Welcome to Dizzy Otter Blog, your go-to place for all things web development, design, and more." />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
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
          <p>Welcome to Dizzy Otter Blog! I'm Charlie Swinhoe, the founder and director. We specialize in web development and design, sharing insights on building websites, creating designs, using AI, acquiring clients, sales strategies, and more. <Link to="/about">Learn more</Link></p>
        </section>
        <section className="latest-posts-section">
          <h2>Latest Posts</h2>
          <BlogList posts={posts} searchQuery={searchQuery} />
        </section>
      </div>
      <div className="search-bar-info">
        <p>Use the search bar below to find blog posts on specific topics or keywords.</p>
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
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;