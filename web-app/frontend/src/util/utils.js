// import { get } from 'https';
import axios from 'axios';
import fs from 'fs'

async function writeUrl(url, filePath) {
    try {
        // Fetch the content from the presigned URL
        const response = await axios.get(url, { responseType: 'stream' });

        // Create a write stream to the specified file path
        const writer = fs.createWriteStream(filePath);

        // Pipe the response data to the filea
        response.data.pipe(writer);

        // Return a promise that resolves when the file is fully written
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

function parse_url(url) {
    // Split the URL by '/'
    const parts = url.split('/');
    // Find the index of 'models' in the URL
    const modelsIndex = parts.indexOf('models');
    // If 'models' is found in the URL
    if (modelsIndex !== -1 && modelsIndex < parts.length - 1) {
        // Get the next part after 'models'
        const modelName = parts[modelsIndex + 1];
        // Split the model name by '?'
        const modelNameParts = modelName.split('?');
        // Remove the file extension
        const modelNameWithoutExtension = modelNameParts[0].split('.').slice(0, -1).join('.');
        // Return the model name without the extension
        return modelNameWithoutExtension;
    }
    return null;
}

export async function getImages(username) {
  const url = 'http://127.0.0.1:5001/images'; 
  const data = {
    username: username
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Success:', response.data);
    return response.data.images;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}

async function get_object(username, objectname) {
  const url = 'http://127.0.0.1:5001/object'; // Replace with your API endpoint
  const data = {
    username: username,
    objectname: objectname
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}