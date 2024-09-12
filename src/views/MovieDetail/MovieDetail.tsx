import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchMovies, toggleFavorite } from '@/store/slices/movieSlice';
import { Header } from '@/components/organisms';
import './_movie-detail.scss';
import { Icon, Typography } from '@/components/atoms';

const MovieDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { movies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  const movie = movies.find((movie) => movie.id === id);
  const favoriteCount = movies.filter((movie) => movie.isFavorite).length;

  const handleFavoriteClick = (id: string | undefined) => {
    if (!id) return;

    dispatch(toggleFavorite(id));
  };

  return (
    <div className="movie-detail">
      <Header favoriteCount={favoriteCount} displaySearchBar={false} />
      <Typography as="h1" size="large" textAlign="center">
        {movie?.name}
      </Typography>
      <div
        className="movie-detail__cover"
        style={{ backgroundImage: `url(${movie?.bigCover})` }}
      >
        <Icon
          name={movie?.isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
          onClick={() => handleFavoriteClick(movie?.id)}
        />
      </div>
      <div className="movie-detail__info">
        <Typography>{movie?.summary}</Typography>
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
          className="movie-card__imdb-logo"
          alt="IMDB Logo"
        />
        <Typography as="span" size="small">
          {movie?.imdbRating} / 100
        </Typography>
      </div>
      <Typography as="p" size="small" fontWeight="bold" color="secondary">
        {movie?.category}
      </Typography>
    </div>
  );
};

export default MovieDetail;
