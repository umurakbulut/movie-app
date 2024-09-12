import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@/components/atoms';
import './_not-found.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <Typography as="h1" size="large" textAlign="center">
        404 - Not Found
      </Typography>
      <Typography as="p" size="medium" textAlign="center">
        {"We can't find the page you're looking for."}
      </Typography>
      <Link to="/" className="not-found__link">
        {'Back to Home'}
      </Link>
    </div>
  );
};

export default NotFound;
