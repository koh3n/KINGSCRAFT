from flask import Flask, request, send_file
from gradio_client import Client, file
from werkzeug.utils import secure_filename
import shutil
import os
import boto3

local_upload_path = './flask/upload'

# setting up aws bucket
s3 = boto3.resource("s3")
bucket = s3.Bucket("sfu-hack")


def get_image():
    client = Client("SIGMitch/InstantMesh")

    if 'image' not in request.files:
        return 'image required', 400
    image = request.files['image']

    if 'filename' not in request.form:
        return 'filename required in data', 400
    # make sure the filename is supported
    filename = secure_filename(request.form['filename'])
    
    if 'user-name' not in request.form:
        return 'user-name requred in data', 400
    user_name = request.form['user-name']
    

    # the directory where uploaded image should be in
    path = os.path.join(local_upload_path, filename)

    if not os.path.exists(local_upload_path):
        os.makedirs(local_upload_path)
    
    # save image to directory
    image.save(path)

    print("User uploaded raw image, saved to: " + path)

    print("Uploading raw image to bucket")
    temp = filename.split('.') # breaks image.png to ['image', 'png']
    bucket_key = user_name+'/'+temp[0]+'-raw'+temp[1] # image.png -> username/image-raw.png
    try:
        bucket.upload_file(Key=bucket_key, Filename=path)
        print("Upload success")
    except Exception as e:
        print(e)
    
    # cleanup
    os.remove(path)
    



    
    



    return