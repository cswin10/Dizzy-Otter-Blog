import React from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/path/to/favicon.ico" />
      {/* Add other meta tags or links as needed */}
    </Helmet>
  );
};

export default CustomHelmet;