from flask.json import jsonify
import requests
from flask import Flask, request
from flask_cors import CORS
from Helpers.PDFParser import extract_text
from Helpers.linkParser import getText
from Helpers.parser import parse

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/link')
def parseLink():
    '''
    Body data must be JSON formatted with url key
    param url: url to be parsed
    Example: {"url": "https://www.apple.com/legal/privacy/en-ww/"}
    '''
    linkUrl = request.headers.get('url')

    data = []

    text = getText(linkUrl)
    collected = parse(text)

    data.append(collected)

    return jsonify(data)

@app.route('/pdf')
def parsePDF():
    '''
    Body data must be JSON formatted with url key
    param url: Firebase URL of the PDF file to be parsed
    Example: {"url": "http://www.africau.edu/images/default/sample.pdf"}
    '''
    pdfUrl = request.headers.get('url')
    #PDFUrl = "https://firebasestorage.googleapis.com/v0/b/monocle-552fc.appspot.com/o/" + PDFUrl + "?alt=" + request.args.get("alt") + "&token=" + request.args.get("token")
    #PDFUrl = "http://www.africau.edu/images/default/sample.pdf"
    r = requests.get(pdfUrl, stream=True)
    if r.status_code == 200:
        text = extract_text("temp.pdf")
        return jsonify(text)
    else:
        return "ERROR: Response " + str(r.status_code)
    