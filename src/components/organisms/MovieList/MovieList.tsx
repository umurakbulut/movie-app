import React from 'react';
import { MovieCard } from '@/components/molecules';
import { IMovie } from '@/model/interfaces';
import './_movie-list.scss';
import { Typography } from '@/components/atoms';

interface IMovieListProps {
  movies: IMovie[];
  onFavoriteClick: (id: string) => void;
}

const MovieList: React.FC<IMovieListProps> = ({ movies, onFavoriteClick }) => {
  return movies.length > 0 ? (
    <div className="movie-list">
      {movies.map((movie) => {
        const {
          id,
          name,
          year,
          imdbRating,
          category,
          country,
          cover,
          isFavorite,
          isTvSeries,
          summary,
        } = movie;

        return (
          <MovieCard
            key={id}
            name={name}
            year={year}
            imdbRating={imdbRating}
            category={category}
            cover={cover}
            isFavorite={isFavorite}
            onFavoriteClick={() => onFavoriteClick(id)}
            id={id}
            country={country}
            isTvSeries={isTvSeries}
            summary={summary}
          />
        );
      })}
    </div>
  ) : (
    <div className="movie-list--not-found">
      <Typography size="medium" textAlign="center">
        No movies found.
      </Typography>
    </div>
  );
};

export default MovieList;
