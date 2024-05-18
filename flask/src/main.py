from flask import Flask
from src.routes.api_routes import ai_bp
from src.routes.s3_routes import s3_bp

app = Flask(__name__)

app.register_blueprint(ai_bp)
app.register_blueprint(s3_bp)

if __name__ == '__main__':
        app.run(debug=True)