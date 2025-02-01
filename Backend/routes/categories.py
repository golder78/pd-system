from flask import Blueprint, request, jsonify
from models import db, Category

categories_blueprint = Blueprint('categories', __name__)

# GET - List all categories
@categories_blueprint.route('/', methods=['GET'])
def get_categories():
    categories = Category.query.all()  # Retrieve all categories from the database
    categories_data = [{"id": category.id, "category_name": category.category_name} for category in categories]
    return jsonify(categories_data), 200

# GET - Get a single category by ID
@categories_blueprint.route('/<int:id>', methods=['GET'])
def get_category(id):
    category = Category.query.get(id)  # Fetch category by ID
    if not category:
        return jsonify({'error': 'Category not found'}), 404
    return jsonify({'id': category.id, 'category_name': category.category_name}), 200

# POST - Create a new category
@categories_blueprint.route('/', methods=['POST'])
def create_category():
    data = request.json
    if 'category_name' not in data:
        return jsonify({'error': 'Category name is required'}), 400
    category = Category(category_name=data['category_name'])
    db.session.add(category)
    db.session.commit()
    return jsonify({'message': 'Category created successfully!'}), 201

# PUT - Update an existing category by ID
@categories_blueprint.route('/<int:id>', methods=['PUT'])
def update_category(id):
    category = Category.query.get(id)
    if not category:
        return jsonify({'error': 'Category not found'}), 404

    data = request.json
    category.category_name = data.get('category_name', category.category_name)  # Update category name, if provided
    db.session.commit()
    return jsonify({'message': 'Category updated successfully!'}), 200

# DELETE - Delete a category by ID
@categories_blueprint.route('/<int:id>', methods=['DELETE'])
def delete_category(id):
    category = Category.query.get(id)
    if not category:
        return jsonify({'error': 'Category not found'}), 404

    db.session.delete(category)
    db.session.commit()
    return jsonify({'message': 'Category deleted successfully!'}), 200
