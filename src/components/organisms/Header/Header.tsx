import React from 'react';
import { SearchBar } from '@components/molecules';
import { Button, Typography } from '@components/atoms';
import './_header.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSearchTerm } from '@/store/slices/movieSlice';

interface IHeaderProps {
  favoriteCount: number;
  displaySearchBar?: boolean;
}

const Header: React.FC<IHeaderProps> = ({
  favoriteCount,
  displaySearchBar = true,
}) => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector((state) => state.movies);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      {displaySearchBar ? (
        <div className="search-bar-wrapper">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
      ) : null}
      <Button variant="primary" size="small">
        Favorites{' '}
        <Typography as="span" size="small">
          {favoriteCount}
        </Typography>
      </Button>
    </header>
  );
};

export default Header;
