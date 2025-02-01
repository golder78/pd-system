from flask import Blueprint, request, jsonify
from models import db, User

users_blueprint = Blueprint('users', __name__)

# GET - List all users
@users_blueprint.route('/', methods=['GET'])
def get_users():
    users = User.query.all()  # Retrieve all users from the database
    users_data = [{"id": user.id, "name": user.name, "email": user.email} for user in users]
    return jsonify(users_data), 200

# GET - Get a single user by ID
@users_blueprint.route('/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)  # Fetch user by ID
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'id': user.id, 'name': user.name, 'email': user.email}), 200

# POST - Create a new user
@users_blueprint.route('/', methods=['POST'])
def create_user():
    data = request.json
    if 'name' not in data or 'email' not in data:
        return jsonify({'error': 'Name and email are required'}), 400
    user = User(name=data['name'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'}), 201

# PUT - Update an existing user by ID
@users_blueprint.route('/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.json
    user.name = data.get('name', user.name)  # Update name, if provided
    user.email = data.get('email', user.email)  # Update email, if provided
    db.session.commit()
    return jsonify({'message': 'User updated successfully!'}), 200

# DELETE - Delete a user by ID
@users_blueprint.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully!'}), 200
