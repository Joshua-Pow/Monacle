from flask import Flask

app = Flask(__name__)

@app.route('/link')
def parseLink(link):
    return 0

@app.route('/pdf/<PDF_Id>')
def parsePDF(PDF_Id):
    return 0
