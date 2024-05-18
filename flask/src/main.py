from flask import Flask
from flask.src.routes.api_routes import ai_bp
app = Flask(__name__)

app.register_blueprint(ai_bp)

if __name__ == '__main__':
        app.run(debug=True)