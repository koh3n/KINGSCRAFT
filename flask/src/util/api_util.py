from flask import Flask, request, send_file
from gradio_client import Client, file
from werkzeug.utils import secure_filename
import shutil
import os
import boto3

def get_image():

    return