import React from 'react';
import '../styles/DisplayItem.css';
import { parse_url } from '../util/utils';
import { useNavigate } from 'react-router-dom';

const DisplayItem = ({ imageUrl }) => {
  const navigate = useNavigate();
  const name = parse_url(imageUrl);

  const handleClick = () => {
    navigate(`/viewer/${name}`);
  }
  return (
    <div className="display-item" onClick={handleClick}>
      <img src={imageUrl} alt="Display" />
    </div>
  );
};

export default DisplayItem;