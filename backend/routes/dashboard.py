from flask import Blueprint, jsonify
from database import connection

dashboard = Blueprint("dashboard", __name__)

@dashboard.route("/dashboard", methods=["GET"])
def dashboard_data():

    connection.ping(reconnect=True)
    cursor = connection.cursor()

    cursor.execute("SELECT COUNT(*) AS total_users FROM users")
    total_users = cursor.fetchone()["total_users"]

    cursor.execute("SELECT COUNT(*) AS total_games FROM games")
    total_games = cursor.fetchone()["total_games"]

    cursor.execute("SELECT COUNT(*) AS total_orders FROM orders")
    total_orders = cursor.fetchone()["total_orders"]

    cursor.execute("SELECT SUM(price) AS revenue FROM orders")
    revenue = cursor.fetchone()["revenue"]

    if revenue is None:
        revenue = 0

    cursor.execute("""
        SELECT title
        FROM games
        ORDER BY rating DESC
        LIMIT 1
    """)

    top_game = cursor.fetchone()

    if top_game:
        top_game = top_game["title"]
    else:
        top_game = "No Games"

    return jsonify({
        "total_users": total_users,
        "total_games": total_games,
        "total_orders": total_orders,
        "revenue": revenue,
        "top_game": top_game
    })