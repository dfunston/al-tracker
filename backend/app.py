from flask import Flask
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
client = MongoClient('localhost')
db = client.admin
print(db.command("serverStatus"))

@app.route("/")
def hello_world():
    return "Hello, world"
