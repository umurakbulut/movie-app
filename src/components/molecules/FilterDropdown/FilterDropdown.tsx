import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  toggleFavoriteFilter,
  toggleNewFilter,
} from '@/store/slices/movieSlice';
import { Button, Icon, Typography } from '@/components/atoms';
import '@/styles/_dropdown.scss';

const FilterDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const isFavoriteFilterActive = useAppSelector(
    (state) => state.movies.isFavoriteFilterActive
  );
  const isNewFilterActive = useAppSelector(
    (state) => state.movies.isNewFilterActive
  );

  const isFilterActive = isFavoriteFilterActive || isNewFilterActive;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFavoriteFilter = () => {
    dispatch(toggleFavoriteFilter());
    setIsOpen(false);
  };

  const handleNewFilter = () => {
    dispatch(toggleNewFilter());
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Button onClick={handleToggleDropdown} size="small">
        Filter <Icon name="fa fa-sliders" />
        {isFilterActive ? <span className="dropdown__badge" /> : null}
      </Button>

      {isOpen ? (
        <div className="dropdown__menu">
          <div
            className={`dropdown__item ${
              isFavoriteFilterActive ? 'active' : ''
            }`}
            onClick={handleFavoriteFilter}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">Favorites</Typography>
          </div>
          <div
            className={`dropdown__item ${isNewFilterActive ? 'active' : ''}`}
            onClick={handleNewFilter}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">News</Typography>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterDropdown;
