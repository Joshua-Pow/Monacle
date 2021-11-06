from flask.json import jsonify
import requests
from flask import Flask, request
from Helpers.PDFParser import extract_text
import PyPDF4

app = Flask(__name__)

@app.route('/link')
def parseLink():
    return 0

@app.route('/pdf/<PDFUrl>')
def parsePDF(PDFUrl):
    '''
    param PDFUrl: URL of the PDF file to be parsed
    '''
    #PDFUrl = "https://firebasestorage.googleapis.com/v0/b/monocle-552fc.appspot.com/o/" + PDFUrl + "?alt=" + request.args.get("alt") + "&token=" + request.args.get("token")
    PDFUrl = "http://www.africau.edu/images/default/sample.pdf"
    r = requests.get(PDFUrl, stream=True)
    if r.status_code == 200:
        text = extract_text("temp.pdf")
    else:
        return "ERROR: Response " + str(r.status_code)
    return jsonify(text)