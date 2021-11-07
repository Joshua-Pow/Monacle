from flask.json import jsonify
import requests
from flask import Flask, request
from flask_cors import CORS
from Helpers.PDFParser import extract_text
from Helpers.linkParser import getText
from Helpers.parser import dataCollected, highlights


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/link')
def parseLink():
    '''
    Body data must be JSON formatted with url key
    param url: url to be parsed
    Example: {"url": "https://www.apple.com/legal/privacy/en-ww/"}
    Returns: {"Data Collected": Words of collected data,
              "How Data is used": ~~~,
              "Data retention": ~~~,
              "Data discolsure": ~~~,
              "Data acess": ~~~,
              "Data highlights: Sentences that have important keywords"}
              }
    '''
    linkUrl = request.headers.get('url')

    data = {}

    text = getText(linkUrl)

    data['Data Collected'] = dataCollected(text)
    data['Highlights'] = highlights(text, [])
    return jsonify(data)

@app.route('/pdf')
def parsePDF():
    '''
    Body data must be JSON formatted with url key
    param url: Firebase URL of the PDF file to be parsed
    Example: {"url": "http://www.africau.edu/images/default/sample.pdf"}
    '''
    pdfUrl = request.headers.get('url')
    r = requests.get(pdfUrl, stream=True)
    if r.status_code == 200:
        text = extract_text("temp.pdf")
        return jsonify(text)
    else:
        return "ERROR: Response " + str(r.status_code)