from flask import Blueprint, Flask, request, jsonify
from util.api_util import *
from util.s3_util import *


app = Flask(__name__)



@app.route("/upload", methods = ['POST'])
def get_image_route():
    return get_image(), 200

@app.route("/process", methods = ['POST'])
def process_image():
    return preprocess(), 200

@app.route("/multiview", methods = ['POST'])
def multiview():
    return generate_multiview()

@app.route("/images", methods = ['POST'])
def image_route():
    data = request.get_json()

    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400

    if 'username' not in data:
        return jsonify({"error": "No username provided"}), 400

    username = data['username']

    return get_all_images(username), 200

@app.route("/object", methods = ['POST'])
def object_route():
    data = request.get_json()

    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400

    if 'username' not in data:
        return jsonify({"error": "No username provided"}), 400
    
    if 'objectname' not in data:
        return jsonify({"error": "No username provided"}), 400

    username = data['username']

    objectname = data['objectname']

    return get_object(username, objectname), 200


if __name__ == '__main__':
        app.run(debug=True, port= 5001)