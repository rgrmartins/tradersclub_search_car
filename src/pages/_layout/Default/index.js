import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../../../components/Menu';
import SearchBar from '../../../components/SearchBar';

export default function Default({ children }) {
  return (
    <>
      <Menu />
      <SearchBar />
      {children}
    </>
  );
}

Default.protoTypes = {
  children: PropTypes.element.isRequired,
};
