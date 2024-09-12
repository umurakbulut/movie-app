import React, { useEffect } from 'react';
import { FilterArea, Header, MovieList } from '@/components/organisms';
import { fetchMovies, toggleFavorite } from '@/store/slices/movieSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { IMovie } from '@/model/interfaces';

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    movies,
    searchTerm,
    isFavoriteFilterActive,
    isNewFilterActive,
    sortOption,
  } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFavoriteClick = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const favoriteCount = movies.filter((movie) => movie.isFavorite).length;

  const isRecentlyAdded = (addedDate: string) => {
    const currentDate = new Date();
    const addedDateObj = new Date(addedDate);

    const timeDiff = currentDate.getTime() - addedDateObj.getTime();
    const differenceInDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    return differenceInDays <= 30;
  };

  const sortMovies = (movies: IMovie[], sortOption: string) => {
    switch (sortOption) {
      case 'name':
        return [...movies].sort((a, b) => a.name.localeCompare(b.name));
      case 'year':
        return [...movies].sort((a, b) => Number(b.year) - Number(a.year));
      case 'imdbRating':
        return [...movies].sort((a, b) => b.imdbRating - a.imdbRating);
      default:
        return movies;
    }
  };

  const filteredAndSortedMovies = sortMovies(
    movies.filter((movie) => {
      const matchesSearch = movie.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFavorite = isFavoriteFilterActive ? movie.isFavorite : true;
      const matchesNew = isNewFilterActive
        ? isRecentlyAdded(movie.addedDate)
        : true;
      return matchesSearch && matchesFavorite && matchesNew;
    }),
    sortOption
  );

  return (
    <>
      <Header favoriteCount={favoriteCount} />
      <FilterArea />
      <MovieList
        movies={filteredAndSortedMovies}
        onFavoriteClick={handleFavoriteClick}
      />
    </>
  );
};

export default Movies;
