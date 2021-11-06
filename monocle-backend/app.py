from flask import Flask
from Helpers.linkParser import getText

app = Flask(__name__)

@app.route('/link')
def parseLink(link):
    text = getText(link)

@app.route('/pdf/<PDF_Id>')
def parsePDF(PDF_Id):
    return 0
