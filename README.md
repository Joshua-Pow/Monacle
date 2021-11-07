<img src="https://user-images.githubusercontent.com/28721284/140635551-2f0b929d-2ee5-4850-b648-e85eb5e40a27.png" width="200" height="200" />

# Monocle - Privacy Policies Simplified
Joshua Pow, Jongjin Jung, Tashan Maniyalaghan, Peter Damrongpiriyapong

NewHacks 2021

**Ever wonder what you agree to in those privacy policies you don't read?**  
Monocle reduces these lengthly documents down the the most important information about the safety and privacy of your data. Simply link the privacy policy website, or upload a PDF and we will scan it and give you a summary of the most important parts of the policy that you should know. We focus on showing information such as what data they collect, purpose of data being collected, how it is stored and affiliated companies who have access to the data.

## Inspiration
The inspiration for this project comes from our curiosity of what we were blindly accepting in these privacy policies. Rarely do we even take a glance at what these large documents contain, so we believed that we could make this process simplier and easier to understand thus we created Monocle. By creating an algorthim to parse the most important information regarding your privacy and data, we hope to make it effortless to understand what you are accepting.

## What does Monocle do?
Simply input either the link or a PDF of a privacy policy and let Monocle do the work of determining the most important information. Once parsed, we display quick overview of the important questions such as what data is collected, how it's used, when data is disclosed, and data rights you have. Additionally, we also produce what we can highlights, which are subsections of the privacy policy that we believe are important based on keywords.

## How does Monocle work?
Monocle is built use a couple technologies, mainly React for the frontend, Flask for the backend, Firebase as the database and libraries such as BeautifulSoup for scraping information. Once a user enters either a link or a PDF into our website, our backend begins the proces of parsing and determining the information. If a link is provided, we first have to use BeautifulSoup to scrape the information into text for our algorithm to run. 

## Challenges we ran into
The biggest challenge we faced was how we deal with parsing the multitude of formats thay privacy policies come in. Every company formats their privacy policies differently, some it's just a wall of text, but others have dropdowns, sections and different wording. We decided the best course to tackle this was to use keywords as the main way to pull important information out of these documents. While this worked somewhat well, we had to deal with a lot of edge cases to make sure we detected all these keywords.

## What we learned
Through building this, we learned a lot about how parse large text files for specific information. While Monocle is far from perfect, we are happy where we were able to build within this time. As many of us had never done web scraping and parsing, we all learned a lot from utilizing BeautifulSoup and writing an algorithm to parse out the information we wanted.

## Future of Monocle
We would love to continue improving the information that we can get out of these privacy policies. Right now we are only parsing and determining the information, but we would think we could expand it using Machine Learning to gain even more information and detecting more contextual data. Additionally, we want to provide the user more options such as searching specific topics of a privacy policy, and rating of privacy policies on how they utilize your data and privacy.
