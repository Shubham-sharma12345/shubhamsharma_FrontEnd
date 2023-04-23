import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = ({ index, isSelected, onClick, text }) => {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  const backgroundColor = useMemo(() => {
    return isSelected ? 'green' : 'red';
  }, [isSelected]);

  return (
    <li style={{ backgroundColor }} onClick={handleClick}>
      {text}
    </li>
  );
};


SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const renderedItems = useMemo(() => {
    return items.map((item, index) => (
      <SingleListItem
        key={index}
        onClick={handleClick}
        text={item.text}
        index={index}
        isSelected={selectedIndex === index}
      />
    ));
  }, [items, handleClick, selectedIndex]);

  return <ul style={{ textAlign: 'left' }}>{renderedItems}</ul>;
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default List;