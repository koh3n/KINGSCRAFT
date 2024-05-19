import React, { useState } from 'react';
import firebase from "../firebase/firebase"

const ImageUpload = ({User}) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('user-name', User.uid);
    formData.append('file-name', image.name);

    const filename = image.name;
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    formData.append('image', image, filename);

    try {
      const response = await fetch('http://142.58.61.120:5001/mobile', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      alert('Image uploaded successfully');
      console.log(data);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {preview && (
          <div>
            <img src={preview} alt="Preview" style={{ maxWidth: '300px' }} />
          </div>
        )}
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUpload;