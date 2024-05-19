import React, { useState, useEffect } from 'react';
import '../styles/DisplayItem.css';
import { get_object, parse_url } from '../util/utils';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase';

const DisplayItem = ({ imageUrl }) => {
  const name = parse_url(imageUrl);
  console.log(name);
  const [url, setUrl] = useState("");
  // get a list of model urls
  // loop through the list and find the model url that matches the image
  // and set the model url to the url state
  // return a tag with model url as href


  // console.log("url", imageUrl);


  get_object(firebase.auth().currentUser.uid, name).then((result)=>{setUrl(result); console.log(url);}, console.log("failed to retrieve model url"));

  return (
    <div className="display-item">
      
        <a href={url}>
          <img src={imageUrl} alt="Display" />
        </a>
      
    </div>
  );
};

export default DisplayItem;
