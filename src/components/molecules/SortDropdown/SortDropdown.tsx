import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSortOption } from '@/store/slices/movieSlice';
import { Button, Icon, Typography } from '@/components/atoms';
import '@/styles/_dropdown.scss';

const SortDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sortOption = useAppSelector((state) => state.movies.sortOption);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortOption = (option: string) => {
    dispatch(setSortOption(option));
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
        Sort by
        {sortOption ? <span className="dropdown__badge" /> : null}
        <Icon name="fa fa-sort" />
      </Button>

      {isOpen && (
        <div className="dropdown__menu">
          <div
            className="dropdown__item"
            onClick={() => handleSortOption('')}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">Default</Typography>
          </div>
          <div
            className={`dropdown__item ${
              sortOption === 'name' ? 'active' : ''
            }`}
            onClick={() => handleSortOption('name')}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">Name</Typography>
          </div>
          <div
            className={`dropdown__item ${
              sortOption === 'year' ? 'active' : ''
            }`}
            onClick={() => handleSortOption('year')}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">Year</Typography>
          </div>
          <div
            className={`dropdown__item ${
              sortOption === 'imdbRating' ? 'active' : ''
            }`}
            onClick={() => handleSortOption('imdbRating')}
            role="button"
            tabIndex={0}
          >
            <Typography size="small">IMDB Rating</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
