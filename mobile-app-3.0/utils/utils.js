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
    // Return null if 'models' is not found in the URL or if the URL is invalid
    return null;
}



async function get_all_images(username) {
    const url = 'http://127.0.0.1:5001/images'; // Replace with your API endpoint
    const data = {
      username: username
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Success:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    }
  }


  async function get_object(username, objectname) {
    const url = 'http://127.0.0.1:5001/object'; // Replace with your API endpoint
    const data = {
      username: username,
      objectname: objectname
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Success:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    }
  }