import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/components/routes/PrivateRoute';
import { Login, MovieDetail, Movies, NotFound } from '@/views';
import { Footer } from '@/components/organisms';

import '@styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
