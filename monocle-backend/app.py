from flask.json import jsonify
import requests
from flask import Flask, request
from flask_cors import CORS
from Helpers.PDFParser import extract_text
from Helpers.linkParser import getText
from Helpers.parser import keywordSearch, highlights


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

import ssl

ssl._create_default_https_context = ssl._create_unverified_context

dataCollectedKey = ['Name', 'Credit Card', 'Payment Method', 'Location', 'Age', 'Address', 'Picture', 'School', 'Website', 'Cookies', 'IP', 'Payment Information', 'Financial Data', 'Log', 'Content', 'Face recognition', 'Contact Info']
useKey = ['Processing', 'Verification', 'Marketing', 'Analytics', 'Personalization', 'Recommendations', 'Legal Compliance', 'Advertising', 'Ads', 'Advertisment']
disclosureKey = ['Third Party Advertisers', 'Cloud Computing', 'Warrant', 'Government']
dataRightsKey = ['Access', 'Correction', 'Deletion', 'Withdraw Consent']

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
              "Data access": ~~~,
              "Data highlights: Sentences that have important keywords"}
              }
    '''
    linkUrl = request.headers.get('url')

    data = {}

    text = getText(linkUrl)

    data['Data Collected'] = keywordSearch(text, dataCollectedKey)
    data['Data Used'] = keywordSearch(text, useKey)
    data['Disclosure'] = keywordSearch(text, disclosureKey)
    data['Data Rights'] = keywordSearch(text, dataRightsKey)
    data['Highlights'] = highlights(text, [])
    return jsonify(data)

@app.route('/pdf')
def parsePDF():
    '''
    Body data must be JSON formatted with url key
    param url: Firebase URL of the PDF file to be parsed
    Example: {"url": "http://www.africau.edu/images/default/sample.pdf"}
    '''
    data = {}
    pdfUrl = request.headers.get('url')
    r = requests.get(pdfUrl, stream=True)
    if r.status_code == 200:
        text = extract_text("temp.pdf")
        data['Data Collected'] = keywordSearch(text)
        data['Data Used'] = keywordSearch(text, useKey)
        data['Disclosure'] = keywordSearch(text, disclosureKey)
        data['Data Rights'] = keywordSearch(text, dataRightsKey)
        data['Highlights'] = highlights(text, [])
        return jsonify(data)
    else:
        return "ERROR: Response " + str(r.status_code)