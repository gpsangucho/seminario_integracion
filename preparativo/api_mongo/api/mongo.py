from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
client = MongoClient("mongodb://admin:admin123@localhost:27017/")

db = client["veterinaria_bdd"]   # ← la base que ves en Compass
mascotas_collection = db["mascotas"]  # colección existente
clientes_collection = db["cliente"]