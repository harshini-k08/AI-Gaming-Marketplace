import google.generativeai as genai
from config import GEMINI_API_KEY
from database import connection

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_ai(message):
    try:
        cursor = connection.cursor()

        cursor.execute("""
            SELECT title, category, price, rating, description
            FROM games
        """)

        games = cursor.fetchall()

        game_list = ""

        for game in games:
            game_list += f"""
Title: {game['title']}
Category: {game['category']}
Price: ₹{game['price']}
Rating: {game['rating']}
Description: {game['description']}

"""

        prompt = f"""
You are an AI assistant for an AI Gaming Marketplace.

Recommend ONLY games from the following database.

{game_list}

User Question:
{message}

If the user asks for:
- Best game → recommend highest rated games.
- Cheap games → recommend lower-priced games.
- RPG games → recommend RPG category.
- Action games → recommend Action category.
- Explain why the game is recommended.
"""

        response = model.generate_content(prompt)

        return response.text

    except Exception as e:
        print(e)
        return "Unable to connect to AI."