import boto3
import os

# setting up aws bucket
s3 = boto3.resource("s3")
bucket_name = "sfu-hack"
bucket = s3.Bucket(bucket_name)

# Initialize an S3 client
os.environ['AWS_PROFILE'] = 'sfu'
s3_client = boto3.client('s3')


def get_all_images():
    return