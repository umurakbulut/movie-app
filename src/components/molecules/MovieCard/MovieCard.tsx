import React from 'react';
import { Typography, Icon } from '@components/atoms';
import './_movie-card.scss';
import { Link } from 'react-router-dom';

interface IMovieCardProps {
  id: string;
  name: string;
  year: string;
  imdbRating: number;
  category: string;
  country: string;
  cover: string;
  isFavorite: boolean;
  isTvSeries: boolean;
  summary: string;
  onFavoriteClick: () => void;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  id,
  name,
  year,
  imdbRating,
  category,
  country,
  cover,
  isFavorite,
  isTvSeries,
  onFavoriteClick,
}) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="movie-card__poster"
        />
      </Link>
      <div className="movie-card__content">
        <Typography as="p" size="small" color="secondary" fontWeight="bold">
          {country}, {year}
        </Typography>
        <Typography as="h3" size="medium" fontWeight="bold">
          {name}
        </Typography>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
            className="movie-card__imdb-logo"
            alt="IMDB Logo"
          />
          <Typography as="span" size="small">
            {imdbRating} / 100
          </Typography>
        </div>
        <Typography as="p" size="small" fontWeight="bold" color="secondary">
          {category}
        </Typography>
        {isTvSeries ? (
          <Typography as="span" className="movie-card__badge">
            TV SERIES
          </Typography>
        ) : null}
        <Icon
          name={isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
          onClick={onFavoriteClick}
        />
      </div>
    </div>
  );
};

export default MovieCard;
