from flask import Blueprint
from util.api_util import get_image

api_bp = Blueprint('upload', __name__)

@api_bp.route("/upload", methods = ['POST'])
def get_image_route():
    return get_image()