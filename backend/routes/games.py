from flask import Blueprint, jsonify, request
from database import connection

# Create the Blueprint FIRST
games = Blueprint("games", __name__)

# GET all games
@games.route("/games", methods=["GET"])
def get_games():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM games")
    data = cursor.fetchall()
    return jsonify(data)

# Add a new game
@games.route("/games", methods=["POST"])
def add_game():
    data = request.get_json()

    cursor = connection.cursor()

    sql = """
    INSERT INTO games(title, category, price, rating, image, description)
    VALUES(%s,%s,%s,%s,%s,%s)
    """

    cursor.execute(sql, (
        data["title"],
        data["category"],
        data["price"],
        data["rating"],
        data["image"],
        data["description"]
    ))

    connection.commit()

    return jsonify({
        "message": "Game Added Successfully!"
    })
@games.route("/games/<int:id>", methods=["PUT"])
def update_game(id):

    data = request.get_json()

    cursor = connection.cursor()

    sql = """
    UPDATE games
    SET title=%s,
        category=%s,
        price=%s,
        rating=%s,
        image=%s,
        description=%s
    WHERE id=%s
    """

    cursor.execute(sql, (
        data["title"],
        data["category"],
        data["price"],
        data["rating"],
        data["image"],
        data["description"],
        id
    ))

    connection.commit()

    return jsonify({
        "message": "Game Updated Successfully!"
    })
@games.route("/games/<int:id>", methods=["DELETE"])
def delete_game(id):

    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM games WHERE id=%s",
        (id,)
    )

    connection.commit()

    return jsonify({
        "message": "Game Deleted Successfully!"
    })