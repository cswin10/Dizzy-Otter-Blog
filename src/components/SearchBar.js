import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ posts, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredSuggestions = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, posts]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleSuggestionClick = (post) => {
    setQuery(post.title);
    onSearch(post.title);
    window.location.href = `/blog/${post.id}`;
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(post => (
            <li key={post.id} onClick={() => handleSuggestionClick(post)}>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;