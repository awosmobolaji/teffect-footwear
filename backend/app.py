
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

# Allow React to communicate with Flask
CORS(app)


# =========================
# DATABASE
# =========================

def get_db():
    conn = sqlite3.connect("teffect.db")
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


# =========================
# HOME
# =========================

@app.route("/")
def home():
    return "TEFFECT Backend is running!"


# =========================
# RECEIVE CUSTOMER REQUEST
# =========================

@app.route("/api/requests", methods=["POST"])
def create_request():

    data = request.get_json()

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


# =========================
# GET ALL REQUESTS
# =========================

@app.route("/api/requests", methods=["GET"])
def get_requests():

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


# =========================
# START SERVER
# =========================

if __name__ == "__main__":

    create_database()

    app.run(
        debug=True,
        port=5000
    )

