from flask import Blueprint, request, jsonify
from database import connection
import bcrypt

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])

def register():

    data = request.get_json()

    name = data["name"]
    email = data["email"]
    password = data["password"]

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )

    cursor = connection.cursor()

    sql = """
        INSERT INTO users(name,email,password)
        VALUES(%s,%s,%s)
    """

    cursor.execute(sql, (
        name,
        email,
        hashed_password.decode("utf-8")
    ))

    connection.commit()

    return jsonify({
        "message": "User Registered Successfully!"
    })
@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data["email"]
    password = data["password"]

    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=%s",
        (email,)
    )

    user = cursor.fetchone()

    if user is None:
        return jsonify({
            "message":"User not found"
        }),404

    if bcrypt.checkpw(
        password.encode("utf-8"),
        user["password"].encode("utf-8")
    ):

        return jsonify({
            "message":"Login Successful",
            "user":{
                "id":user["id"],
                "name":user["name"],
                "email":user["email"]
            }
        })

    return jsonify({
        "message":"Invalid Password"
    }),401

@auth.route("/forgot-password", methods=["POST"])
def forgot_password():

    data = request.get_json()

    email = data["email"]
    new_password = data["newPassword"]

    # Hash the new password
    hashed_password = bcrypt.hashpw(
        new_password.encode("utf-8"),
        bcrypt.gensalt()
    )

    cursor = connection.cursor()

    cursor.execute(
        "UPDATE users SET password=%s WHERE email=%s",
        (hashed_password.decode("utf-8"), email)
    )

    connection.commit()

    if cursor.rowcount == 0:
        return jsonify({
            "message": "User not found"
        }), 404

    return jsonify({
        "message": "Password updated successfully"
    })