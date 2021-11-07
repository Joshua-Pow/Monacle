from fuzzywuzzy import process

dataKeywords = ['Name', 'Credit Card', 'Payment Method', 'Location', 'Age', 'Address', 'Picture', 'School', 'Website', 'Cookie', 'IP', 'Payment Information', 'Financial Data']

def parse(text):
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

