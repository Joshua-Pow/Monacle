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

def highlights(text, keywords):
    '''
    keywords: a list of strings
    text: a long string
    '''
    keywords = dataKeywords
    sentences = text.split(".")
    result = []

    for sentence in sentences:
        for word in sentence.split():
            #print(sentence.split())
            #check if the sentance is already in the result list
            if sentence not in result:
                for keyword in keywords:
                    if sentence not in result:
                        #check if keyword and word are the exact same string
                        if keyword.lower() == word.lower():
                            result.append(sentence)
                            #go to next sentence
    return result

text="com\nCancel\nApple\nStore\nMac\niPad\niPhone\nWatch\nAirPods\nTV & Home\nOnly on Apple\nAccessories\nSupport\nShopping Bag\n+\nCancel\nPrivacy\nLocal Nav Open Menu\nLocal Nav Close Menu\nOverview\nFeatures\nControl\nLabels\nTransparency Report\nPrivacy Policy\nEnglish\nChoose your preferred language\nApple Privacy Policy\nUpdated October 27, 2021\nApple’s Privacy Policy describes how Apple collects, uses, and shares your personal data"
keyword="apple"
print(highlights(text, keyword))