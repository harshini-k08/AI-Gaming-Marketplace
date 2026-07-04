from flask import Blueprint, request, jsonify
from database import connection

reviews = Blueprint("reviews", __name__)

@reviews.route("/reviews", methods=["POST"])
def add_review():

    data = request.get_json()

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO reviews(user_id, game_id, rating, review)
        VALUES(%s,%s,%s,%s)
        """,
        (
            data["user_id"],
            data["game_id"],
            data["rating"],
            data["review"]
        )
    )

    connection.commit()

    return jsonify({
        "message": "Review Added Successfully"
    })
@reviews.route("/reviews/<int:game_id>", methods=["GET"])
def get_reviews(game_id):

    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM reviews WHERE game_id=%s ORDER BY created_at DESC",
        (game_id,)
    )

    reviews = cursor.fetchall()

    return jsonify(reviews)