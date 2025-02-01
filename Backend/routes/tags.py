from flask import Blueprint, request, jsonify
from models import db, Tag

tags_blueprint = Blueprint('tags', __name__)

# GET - List all tags
@tags_blueprint.route('/', methods=['GET'])
def get_tags():
    tags = Tag.query.all()  # Retrieve all tags from the database
    tags_data = [{"id": tag.id, "tag_name": tag.tag_name} for tag in tags]
    return jsonify(tags_data), 200

# GET - Get a single tag by ID
@tags_blueprint.route('/<int:id>', methods=['GET'])
def get_tag(id):
    tag = Tag.query.get(id)  # Fetch the tag by ID
    if not tag:
        return jsonify({'error': 'Tag not found'}), 404
    return jsonify({'id': tag.id, 'tag_name': tag.tag_name}), 200

# POST - Create a new tag
@tags_blueprint.route('/', methods=['POST'])
def create_tag():
    data = request.json
    if 'tag_name' not in data:
        return jsonify({'error': 'Tag name is required'}), 400
    tag = Tag(tag_name=data['tag_name'])
    db.session.add(tag)
    db.session.commit()
    return jsonify({'message': 'Tag created successfully!'}), 201

# PUT - Update an existing tag by ID
@tags_blueprint.route('/<int:id>', methods=['PUT'])
def update_tag(id):
    tag = Tag.query.get(id)
    if not tag:
        return jsonify({'error': 'Tag not found'}), 404

    data = request.json
    tag.tag_name = data.get('tag_name', tag.tag_name)  # Update tag name, if provided
    db.session.commit()
    return jsonify({'message': 'Tag updated successfully!'}), 200

# DELETE - Delete a tag by ID
@tags_blueprint.route('/<int:id>', methods=['DELETE'])
def delete_tag(id):
    tag = Tag.query.get(id)
    if not tag:
        return jsonify({'error': 'Tag not found'}), 404

    db.session.delete(tag)
    db.session.commit()
    return jsonify({'message': 'Tag deleted successfully!'}), 200
