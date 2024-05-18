from flask import Blueprint, Flask, request, jsonify

from util.s3_util import *

s3_bp = Blueprint('upload', __name__)

@s3_bp.route("/images", methods = ['POST'])
def image_route():
    data = request.get_json()

    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400

    if 'username' not in data:
        return jsonify({"error": "No username provided"}), 400

    username = data['username']

    return get_all_images(username), 200