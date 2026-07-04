import os
from dotenv import load_dotenv

load_dotenv()

DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = "nith37"
DB_NAME = "ai_gaming_marketplace"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")