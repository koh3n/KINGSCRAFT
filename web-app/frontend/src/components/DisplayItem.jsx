import React from 'react';
import '../styles/DisplayItem.css';
import { get_object, parse_url } from '../util/utils';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase';

const DisplayItem = ({ imageUrl }) => {
  const name = parse_url(imageUrl);
  console.log(name);
  // console.log("url", imageUrl);
  const url = get_object(firebase.auth().currentUser.uid, name);  
  console.log(url);
  return (
    <div className="display-item">
      <Link to={url}>
        <img src={imageUrl} alt="Display" />
      </Link>
    </div>
  );
};

export default DisplayItem;
