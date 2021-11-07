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

# This function will extract the sentences from the text with key words in them.

def extract_sentences(text, keywords):
    '''
    keywords: a list of strings
    text: a long string
    '''
    sentences = text.split(".")
    result = []
    for sentences in sentences:
        for keyword in keywords:
            #ignore case
            if keyword.lower() in sentences.lower():
                result.append(sentences)
    return result