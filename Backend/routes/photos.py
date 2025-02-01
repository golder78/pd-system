from flask import Blueprint, request, jsonify
from models import db, Photo, User, Category

photos_blueprint = Blueprint('photos', __name__)

@photos_blueprint.route('/upload', methods=['POST'])
def upload_photo():
    data = request.json
    
    # Validate required fields
    if not data.get('file_path') or not data.get('description') or not data.get('user_id'):
        return jsonify({'error': 'Missing required fields: file_path, description, and user_id are required'}), 400

    # Optional field: category_id can be None, so we need to check if it exists before using it
    category_id = data.get('category_id')

    # Validate user_id exists
    user = User.query.get(data['user_id'])
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Validate category_id exists if provided
    if category_id:
        category = Category.query.get(category_id)
        if not category:
            return jsonify({'error': 'Category not found'}), 404

    # Create new photo entry
    new_photo = Photo(
        file_path=data['file_path'], 
        description=data['description'], 
        user_id=data['user_id'], 
        category_id=category_id
    )

    # Add photo to the session and commit to the database
    db.session.add(new_photo)
    db.session.commit()

    return jsonify({'message': 'Photo uploaded successfully!'}), 201
