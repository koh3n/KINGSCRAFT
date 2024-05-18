from flask import Blueprint
from util.ai_util import get_image

ai_bp = Blueprint('upload', __name__)

@ai_bp.route("/upload", methods = ['POST'])
def get_image_route():
    return get_image()