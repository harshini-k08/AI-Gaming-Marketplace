from flask import Flask
from flask_cors import CORS
from routes.auth import auth
import database
from routes.games import games
from routes.ai import ai
from routes.orders import orders
from routes.dashboard import dashboard
from routes.reviews import reviews

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)
app.register_blueprint(games)
app.register_blueprint(ai)
app.register_blueprint(orders)
app.register_blueprint(dashboard)
app.register_blueprint(reviews)

@app.route("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }

if __name__ == "__main__":
    app.run(debug=True)