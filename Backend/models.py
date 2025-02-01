from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User Model
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    photos = db.relationship('Photo', backref='user', lazy=True)
    password=db.Column(db.String(40),unique=True, nullable=False)
# Photo Model
class Photo(db.Model):
    photo_id = db.Column(db.Integer, primary_key=True)
    file_path = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255))
    upload_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.category_id'))

# Category Model
class Category(db.Model):
    category_id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(80), unique=True, nullable=False)
    photos = db.relationship('Photo', backref='category', lazy=True)

# Tag Model
class Tag(db.Model):
    tag_id = db.Column(db.Integer, primary_key=True)
    tag_name = db.Column(db.String(80), unique=True, nullable=False)
    photos = db.relationship('PhotoTag', back_populates='tag')

# Photo-Tag Relationship Model
class PhotoTag(db.Model):
    photo_id = db.Column(db.Integer, db.ForeignKey('photo.photo_id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tag.tag_id'), primary_key=True)
    photo = db.relationship('Photo', backref='photo_tags')
    tag = db.relationship('Tag', back_populates='photos')
