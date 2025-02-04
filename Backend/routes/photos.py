from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from models import db, Photo

# Define blueprint first
photos_blueprint = Blueprint('photos', __name__)

@photos_blueprint.route('/photos', methods=['GET'])
def get_photos():
    photos = Photo.query.all()
    photo_list = [{"id": photo.id, "file_path": photo.file_path, "description": photo.description} for photo in photos]
    return jsonify(photo_list), 200

@photos_blueprint.route('/upload', methods=['POST'])
def upload_photo():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    description = request.form.get('description')
    category_id = request.form.get('category_id')
    user_id = request.form.get('user_id')

    if not file or not description or not category_id or not user_id:
        return jsonify({"error": "Missing required fields"}), 400

    # Save file to uploads folder
    filename = secure_filename(file.filename)
    file_path = os.path.join('uploads', filename)
    file.save(file_path)

    # Save file path to database
    new_photo = Photo(
        file_path=file_path,
        description=description,
        user_id=user_id,
        category_id=category_id,
    )
    db.session.add(new_photo)
    db.session.commit()

    return jsonify({"message": "Photo uploaded successfully!"}), 201

@photos_blueprint.route('/photos/<int:photo_id>', methods=['PUT'])
def update_photo(photo_id):
    """Update the description or category of a photo"""
    photo = Photo.query.get(photo_id)
    if not photo:
        return jsonify({"error": "Photo not found"}), 404

    data = request.json
    if 'description' in data:
        photo.description = data['description']
    if 'category_id' in data:
        photo.category_id = data['category_id']

    db.session.commit()
    return jsonify({"message": "Photo updated successfully!"}), 200
