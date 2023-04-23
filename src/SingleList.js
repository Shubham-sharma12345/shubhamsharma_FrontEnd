import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'yellow' : 'green' }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(SingleListItem);