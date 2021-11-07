from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import requests

def getText(link):
    response = Request(url=link, headers={'User-Agent': 'Mozilla/5.0'})
    html = urlopen(response).read()
    soup = BeautifulSoup(html, features="html.parser")

    for script in soup(["script", "style"]):
        script.extract()

    text = soup.get_text()

    lines = (line.strip() for line in text.splitlines())
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    text = '\n'.join(chunk for chunk in chunks if chunk)

    # print(text)

    return text

getText('https://discord.com/privacy')