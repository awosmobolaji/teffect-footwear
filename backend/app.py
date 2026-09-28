
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)

CORS(app)


# Get database path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATABASE = os.path.join(BASE_DIR, "teffect.db")


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def create_database():
    conn = get_db()

    conn.execute("""
        CREATE TABLE IF NOT EXISTS requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'New',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()


@app.route("/")
def home():
    return "TEFFECT Backend is running!"


@app.route("/api/requests", methods=["POST"])
def create_request():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "No request data received."
        }), 400

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({
            "error": "Please fill in all fields."
        }), 400

    conn = get_db()

    conn.execute("""
        INSERT INTO requests
        (name, email, message)
        VALUES (?, ?, ?)
    """, (name, email, message))

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Your footwear request has been received!"
    }), 201


@app.route("/api/requests", methods=["GET"])
def get_requests():

    # Make sure the database/table exists
    create_database()

    conn = get_db()

    requests = conn.execute("""
        SELECT *
        FROM requests
        ORDER BY id DESC
    """).fetchall()

    conn.close()

    return jsonify([
        dict(item)
        for item in requests
    ])


# Create database when Flask starts
create_database()


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )
