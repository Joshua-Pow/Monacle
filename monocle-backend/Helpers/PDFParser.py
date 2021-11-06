import PyPDF4
import requests

# This function is used to extract text from a PDF file.

def extract_text(path):
    '''
    path: a string of the path to the PDF file
    '''
    with open(path, 'rb') as f:
        pdf = PyPDF4.PdfFileReader(f)
        text = ""
        for page in range(pdf.getNumPages()):
            text += pdf.getPage(page).extractText()
    return text

# This function will extract the sentances from the text with key words in them.

def extract_sentances(text, keywords):
    '''
    keywords: a list of strings
    text: a long string
    '''
    sentances = text.split(".")
    result = []
    for sentance in sentances:
        for keyword in keywords:
            if keyword in sentance:
                result.append(sentance)
    return result