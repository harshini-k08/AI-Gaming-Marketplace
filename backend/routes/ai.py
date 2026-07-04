from flask import Blueprint, request, jsonify
from ai_service import ask_ai

ai = Blueprint("ai", __name__)

@ai.route("/ai/recommend", methods=["POST"])
def recommend():

    data = request.get_json()

    message = data["message"]

    reply = ask_ai(message)

    return jsonify({
        "reply": reply
    })