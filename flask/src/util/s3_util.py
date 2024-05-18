import boto3
import os
from flask import jsonify

# Initialize the S3 client
os.environ['AWS_PROFILE'] = 'sfu'
s3_client = boto3.client('s3', config=boto3.session.Config(signature_version='s3v4'))

# Your S3 bucket name
BUCKET_NAME = 'sfu-hack'
# Your folder name (prefix) where images are stored
FOLDER_NAME = 'processed-image/'

def get_all_images(username):
# List objects in the specified bucket and folder
    response = s3_client.list_objects_v2(
        Bucket= BUCKET_NAME,
        Prefix= username + '/' + FOLDER_NAME
    )

    # Extract keys of the image objects
    if 'Contents' in response:
        image_keys = [obj['Key'] for obj in response['Contents']]
    else:
        image_keys = []

    # Generate pre-signed URLs for each image
    image_urls = []
    for key in image_keys:
        print(key)
        if key == username + '/' + FOLDER_NAME :
            continue
        try:
            url = s3_client.generate_presigned_url(
                'get_object',
                Params={'Bucket': BUCKET_NAME, 'Key': key},
                ExpiresIn=3600 
            )
            image_urls.append(url)
        except Exception as e:
            print(f"Error generating URL for {key}: {e}")
            continue
    # Return the URLs in a JSON response
    return jsonify({"images": image_urls})

def get_object(username, objectname):
    key = username + '/models/' + objectname

    try:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': BUCKET_NAME, 'Key': key},
            ExpiresIn=3600 
        )

    except Exception as e:
        print(f"Error generating URL for {key}: {e}")

    return jsonify(url)

    
