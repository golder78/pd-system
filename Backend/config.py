import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///photo_dump.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
