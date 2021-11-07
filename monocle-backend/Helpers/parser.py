from fuzzywuzzy import process

dataKeywords = ['Name', 'Credit Card', 'Payment Method', 'Location', 'Age', 'Address', 'Picture', 'School', 'Website', 'Cookie', 'IP', 'Payment Information', 'Financial Data']

def dataCollected(text):
    doc = []
    results = []

    for word in text.split():
        doc.append(word)

    for word in doc:
        closest = process.extractOne(word, dataKeywords)

        if closest[1] >= 90:
            results.append(closest[0])

    results = list(dict.fromkeys(results))

    return results

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
