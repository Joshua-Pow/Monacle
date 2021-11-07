import PyPDF4

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