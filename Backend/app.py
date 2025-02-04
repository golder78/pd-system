from flask import Flask, jsonify
from config import Config
from models import db
from flask_migrate import Migrate
from routes.photos import photos_blueprint
from routes.categories import categories_blueprint
from routes.tags import tags_blueprint
from routes.users import users_blueprint
from flask_cors import CORS
import os  # Enable CORS for handling cross-origin requests

app = Flask(__name__)
app.config.from_object(Config)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Create folder if not exists
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# Enable CORS for handling cross-origin requests between frontend and backend
CORS(app)

# Initialize database
db.init_app(app)

# Migration setup
migrate = Migrate(app, db)

# Register Blueprints for different routes
app.register_blueprint(photos_blueprint, url_prefix='/photos')
app.register_blueprint(categories_blueprint, url_prefix='/categories')
app.register_blueprint(tags_blueprint, url_prefix='/tags')
app.register_blueprint(users_blueprint, url_prefix='/users')

# Health Check API to check if the backend is running
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "API is running"}), 200

if __name__ == '__main__':
    # Run the Flask app with debug mode enabled
    app.run(debug=True, host='0.0.0.0', port=5000)  # Accessible on all IPs and port 5000
