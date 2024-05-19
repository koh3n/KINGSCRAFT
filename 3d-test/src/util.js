const fs = require('fs');
const axios = require('axios');

async function writeToFileFromPresignedUrl(url, filePath) {
    try {
        // Fetch the content from the presigned URL
        const response = await axios.get(url, { responseType: 'stream' });

        // Create a write stream to the specified file path
        const writer = fs.createWriteStream(filePath);

        // Pipe the response data to the file
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

// Usage example
const presignedUrl = "https://sfu-hack.s3.amazonaws.com/test-user/models/chess.obj?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVRUVWOH7RDKOU6XO%2F20240519%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T124502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9a34a5cbf773d632370fed2e7e0fa4edbd90dd9169b5be65703688c14ba5ac1b";
const filePath = './output.obj'; // Replace with your desired file path

writeToFileFromPresignedUrl(presignedUrl, filePath)
    .then(() => console.log('File written successfully'))
    .catch(error => console.error('Error:', error));
