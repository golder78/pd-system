Photo Dump Web Application

Project Overview

This project is a photo management web application built using a React frontend and a Flask backend. Users can upload, view, search, and organize photos with categories and tags. It also features user login functionality.

Features

Upload and store photos.

View all uploaded photos.

Search photos by criteria.

Manage categories and tags for better organization.

Secure user authentication system.

Tech Stack

Frontend:

React (with React Router for navigation)

inlinestyling  for styling

Vite for fast development and build

Backend:

Flask (with Blueprints for modular structure)

SQLAlchemy for database management

Flask-CORS for handling cross-origin requests

Database:

SQLite (Development) or PostgreSQL/MySQL for Production
Setup Instructions

1. Backend Setup:

Step 1: Create a Virtual Environment

python3 -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate   # For Windows

Step 2: Install Dependencies

pip install -r requirements.txt

Step 3: Run the Flask Server

export FLASK_APP=app.py  # For Linux/Mac
set FLASK_APP=app.py     # For Windows
flask run

By default, the server will run at http://127.0.0.1:5000.

2. Frontend Setup:

Step 1: Navigate to the Frontend Directory

cd photo-dump-frontend

Step 2: Install Dependencies

npm install

Step 3: Start the Development Server

npm run dev

By default, the frontend will run at http://localhost:5173.

3. Environment Variables

Create a .env file in the root of the backend with the following content:

DATABASE_URL=sqlite:///database.db
SECRET_KEY=your_secret_key_here

Deployment Instructions

Backend Deployment

Use platforms like Render, Heroku, or Railway for hosting.

Set up environment variables in the platform's dashboard.

Frontend Deployment

Deploy the React app using Vercel or Netlify.

Update the backend API URL in the environment configuration.

Usage Instructions

Navigate to the home page.

Login or register (if authentication is enabled).

Upload photos and organize them into categories and tags.

Search photos using keywords.

Git Instructions

Initial Push to GitHub

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/golder78/pd-system

git push -u origin main

Regular Workflow

git add .
git commit -m "Describe changes"
git push

Contributing

Feel free to submit issues and pull requests.

License

This project is licensed under the MIT License.
georgegolder@2025



