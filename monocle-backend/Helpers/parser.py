from fuzzywuzzy import process

def keywordSearch(text, keywords):
    doc = []
    results = []

    for word in text.split():
        doc.append(word)

    for word in doc:
        closest = process.extractOne(word, keywords)

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
    sentences = text.split(".")
    result = []

    for sentence in sentences:
        for word in sentence.split():
            #print(sentence.split())
            #check if the sentance is already in the result list
            if sentence not in result:
                for keyword in keywords:
                    if sentence not in result:
                        #check if keyword is the same as the word
                        if keyword.lower() == word.lower():
                            result.append(sentence)
                            #go to next sentence
    return result