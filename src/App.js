import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPostDetail from './components/BlogPostDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" component={BlogPostDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />

        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;