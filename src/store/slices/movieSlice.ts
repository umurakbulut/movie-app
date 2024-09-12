import { IMovie } from '@/model/interfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('http://localhost:3001/movies');
  return response.data;
});

interface MovieState {
  movies: IMovie[];
  favorites: string[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
  isFavoriteFilterActive: boolean;
  isNewFilterActive: boolean;
  sortOption: 'name' | 'year' | 'imdbRating' | '';
}

const initialState: MovieState = {
  movies: [],
  favorites: loadFavoritesFromLocalStorage(),
  searchTerm: '',
  loading: false,
  error: null,
  isFavoriteFilterActive: false,
  isNewFilterActive: false,
  sortOption: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      const isAlreadyFavorite = state.favorites.includes(movieId);
      if (isAlreadyFavorite) {
        state.favorites = state.favorites.filter((id) => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));

      const movie = state.movies.find((movie) => movie.id === movieId);
      if (movie) {
        movie.isFavorite = !movie.isFavorite;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleFavoriteFilter: (state) => {
      state.isFavoriteFilterActive = !state.isFavoriteFilterActive;
    },
    toggleNewFilter: (state) => {
      state.isNewFilterActive = !state.isNewFilterActive;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;

        state.movies.forEach((movie) => {
          movie.isFavorite = state.favorites.includes(movie.id);
        });
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load movies';
      });
  },
});

export const {
  toggleFavorite,
  setSearchTerm,
  toggleFavoriteFilter,
  toggleNewFilter,
  setSortOption,
} = movieSlice.actions;
export default movieSlice.reducer;
