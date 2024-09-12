import React from 'react';
import { Typography } from '@/components/atoms';
import { FilterDropdown, SortDropdown } from '@/components/molecules';
import './_filter-area.scss';

const FilterArea: React.FC = () => {
  return (
    <div className="filter-area">
      <Typography as="span" size="large" fontWeight="bold">
        Movies
      </Typography>
      <div>
        <SortDropdown />
        <FilterDropdown />
      </div>
    </div>
  );
};

export default FilterArea;
