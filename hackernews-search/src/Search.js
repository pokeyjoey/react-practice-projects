import React from 'react';
import PropTypes from 'prop-types';

function Search({ handleClick }) {
  return (
    <div className="Search">
      <input type="text" ref={input => this.input = input} />
      <button onClick={handleClick}> Search </button>
    </div>
  );
}
Search.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Search


