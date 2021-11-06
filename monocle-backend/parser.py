import requests
from flask import Flask

app = Flask(__name__)

@app.route('/link')
def parseLink():
    return 0

@app.route('/pdf')
def parsePDF():
    return 0