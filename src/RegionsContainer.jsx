import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MenuList from './styles/MenuList';
import MenuItem from './styles/MenuItem';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuList>
      {regions.map((region) => (
        <MenuItem key={region.id} active={selectedRegion && region.id === selectedRegion.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
