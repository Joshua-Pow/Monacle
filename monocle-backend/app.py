from flask.json import jsonify
import requests
from flask import Flask, request
from Helpers.PDFParser import extract_text
from Helpers.linkParser import getText

app = Flask(__name__)

@app.route('/link')
def parseLink():
    '''
    Body data must be JSON formatted with url key
    param url: url to be parsed
    Example: {"url": "https://www.apple.com/legal/privacy/en-ww/"}
    '''
    request_data = request.get_json()
    linkUrl = request_data['url'] 
    #LinkUrl = request.args.get('LinkUrl')
    #print("url is: " + request.args.get("LinkUrl"))
    #text = getText(LinkUrl)
    return linkUrl

@app.route('/pdf')
def parsePDF():
    '''
    Body data must be JSON formatted with url key
    param url: Firebase URL of the PDF file to be parsed
    Example: {"url": "http://www.africau.edu/images/default/sample.pdf"}
    '''
    request_data = request.get_json()
    pdfUrl = request_data['url']
    #PDFUrl = "https://firebasestorage.googleapis.com/v0/b/monocle-552fc.appspot.com/o/" + PDFUrl + "?alt=" + request.args.get("alt") + "&token=" + request.args.get("token")
    #PDFUrl = "http://www.africau.edu/images/default/sample.pdf"
    r = requests.get(pdfUrl, stream=True)
    if r.status_code == 200:
        text = extract_text("temp.pdf")
        return jsonify(text)
    else:
        return "ERROR: Response " + str(r.status_code)
    
