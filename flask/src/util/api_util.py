from flask import Flask, request, send_file
from gradio_client import Client, file
from werkzeug.utils import secure_filename
import shutil
import os
import boto3

local_storage_path = './flask/storage'

# setting up aws bucket
s3 = boto3.resource("s3")
bucket_name = "sfu-hack"
bucket = s3.Bucket(bucket_name)

# Initialize an S3 client
os.environ['AWS_PROFILE'] = 'sfu'
s3_client = boto3.client('s3')

def get_image():

    if 'image' not in request.files:
        return 'image required', 400
    image = request.files['image']

    if 'file-name' not in request.form:
        return 'file-name required in data', 400
    # make sure the filename is supported
    filename = secure_filename(request.form['file-name'])
    
    if 'user-name' not in request.form:
        return 'user-name requred in data', 400
    user_name = request.form['user-name']
    

    # the directory where uploaded image should be in
    path = os.path.join(local_storage_path, filename)

    if not os.path.exists(local_storage_path):
        os.makedirs(local_storage_path)
    
    # save image to directory
    image.save(path)

    print("User uploaded raw image, saved to: " + path)

    print("Uploading raw image to bucket")
    # temp = filename.split('.') # breaks image.png to ['image', 'png']
    bucket_key = user_name+'/'+ 'image-raw' + '/' + filename # image.png -> username/image-raw/image.png
    try:
        bucket.upload_file(Key=bucket_key, Filename=path)
        print("Upload success")
    except Exception as e:
        print(e)
    
    # cleanup
    os.remove(path)


def preprocess():
    if 'user-name' not in request.form:
        return 'user-name requred in data', 400
    user_name = request.form['user-name']
    if 'project-name' not in request.form:
        return 'project-name required in data', 400
    key = user_name + "/" + key
    gradio_client = Client("SIGMitch/InstantMesh")
    s3_client.download_file(bucket_name, )
    src = gradio_client.predict(input_image=file(...), do_remove_background=True, api_name="/preprocess")








    
    



    return