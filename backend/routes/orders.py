from flask import Blueprint, request, jsonify
from database import connection

orders = Blueprint("orders", __name__)

# Save a new order
@orders.route("/orders", methods=["POST"])
def add_order():

    data = request.get_json()

    user_id = data["user_id"]
    game_title = data["game_title"]
    price = data["price"]

    connection.ping(reconnect=True)
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO orders(user_id, game_title, price)
        VALUES(%s,%s,%s)
    """, (user_id, game_title, price))

    connection.commit()

    return jsonify({
        "message": "Order Placed Successfully!"
    })


# Get all orders of a user
@orders.route("/orders/<int:user_id>", methods=["GET"])
def get_orders(user_id):

    connection.ping(reconnect=True)
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM orders WHERE user_id=%s ORDER BY order_date DESC",
        (user_id,)
    )

    data = cursor.fetchall()

    return jsonify(data)