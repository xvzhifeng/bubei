# -*- coding:utf-8 -*-
# selenium 4

import lib.route as U
from ast import operator
from cmath import phase
from lib2to3.pgen2 import driver
from click import open_file
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.utils import ChromeType
from selenium.webdriver.common.by import By
import requests
import time
from datetime import datetime
import json
import re
import os
import sys
import base64

sys.path.append(os.path.join(
    os.path.dirname(
        os.path.abspath(__file__)), "lib"))


word_path = os.path.join(
    os.path.dirname(
        os.path.abspath(__file__)), "conf/wordbook.conf")

word_book = 0


class Operator():
    def __init__(self) -> None:
        self.driver = webdriver.Chrome(service=Service(
            ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()))
        self.word = ["学生", "大学生", "研究生"]
        self.result = []

    def gotoPage(self, url):
        self.driver.get(url)

    def quit(self):
        self.driver.quit()

    def input(self, word):
        pass

    def maxWindow(self):
        self.driver.maximize_window()

    def find_xpth(self, xpth):
        return self.driver.find_element(By.XPATH, xpth)
        # return self.driver


class Word():
    def __init__(self) -> None:
        self.japaneseMeans = ""
        self.chineseMeans = ""
        self.falseName = ""
        self.EnglishMeans = ""
        self.voice = ""
        self.voiceUrl = ""
        self.sentence = []
        self.phrase = []
        self.standby = ""
        self.wordBookId = word_book


class Sentence():
    def __init__(self, kind=1) -> None:
        self.japaneseMeans = ""
        self.chineseMeans = ""
        self.EnglishMeans = ""
        self.kind = kind
        self.standby = ""
        self.voiceUrl = ""


def saveToFile(ret, wordName):

    file = open(wordName+".mp3", "a+")
    file.write(ret)
    file.close()


class Tool():
    def __init__(self):
        self.operator = Operator()
        self.word = Word()
        self.chineseMeansWordOne = ""
        self.phrase = []
        self.sentence = []

    def getWordInfoFromHujiang(self, wordName):
        print("正在获取单词信息：")
        time.sleep(1)
        self.operator.gotoPage("https://www.hjdict.com/jp/")
        self.operator.maxWindow()
        self.operator.find_xpth(
            "//div[@class='search-input-wrapper']/input").send_keys(wordName)
        time.sleep(1)
        self.operator.find_xpth(
            "//div[@class='search-buttonpane-group search-buttonpane-group-jp']/button[1]").click()
        time.sleep(1)
        self.word.japaneseMeans = self.operator.find_xpth(
            "//div[@class='word-text']/h2").text
        self.word.falseName = self.operator.find_xpth(
            '/html/body/div[1]/div/main/div/section/div/section/div/header/div[1]/div[2]/span[1]').text[1:-1]
        self.word.chineseMeans = self.operator.find_xpth(
            "//div[@class='simple']").text
        self.word.standby = self.operator.find_xpth(
            "//div[@class='simple']/h2").text[1:-1]
        self.word.voice = self.operator.find_xpth(
            '/html/body/div[1]/div/main/div/section/div/section/div/header/div[1]/div[2]/span[2]').text[1:-1]
        time.sleep(1)
        self.word.voiceUrl = self.operator.find_xpth(
            "//span[@class='word-audio audio audio-light']").get_attribute("data-src")
        # todo MP3 file save to local file （download）
        # voiceFile = requests.get(word1.voiceUrl)
        # saveToFile(voiceFile.text,word1.japaneseMeans)
        self.saveVoiceFile(self.word.voiceUrl)
        self.chineseMeansWordOne = self.getChineseMeansWordOne()

    def getChineseMeansWordOne(self):
        firstLineChinese = self.operator.find_xpth(
            "/html/body/div[1]/div/main/div/section/div/section/div/header/div[2]/ul/li").text
        new_chineseMeans = firstLineChinese.split('.')[1]
        return new_chineseMeans.split('，')[0].split('；')[0].split('。')[0].replace('。', '')

    def saveVoiceFile(self, url):
        print("downloading with requests")
        # url = 'http://download.redis.io/releases/redis-5.0.5.tar.gz'
        r = requests.get(url)
        requestData = {}
        requestData["base64"] = str(base64.b64encode(r.content),"utf-8")
        requestData["fileName"] = self.word.japaneseMeans
        print(requestData)
        responseVoice = requests.post(U.api_uploadMp3,data=requestData);
        res = responseVoice.json()
        self.word.voiceUrl = res['response']
        
        # with open(self.word.japaneseMeans + ".mp3", "wb") as code:
        #     code.write(r.content)

    def getSentenceFromBing(self):
        print("正在获取单词例句：")
        time.sleep(1)
        time.sleep(1)
        sentence1 = Sentence()
        # gotoBing
        self.operator.gotoPage("https://cn.bing.com/dict/")
        time.sleep(1)
        self.operator.find_xpth(
            "//div[@class='b_searchboxForm']/input[1]").send_keys(self.chineseMeansWordOne)
        self.operator.find_xpth("//input[@class='b_searchboxSubmit']").click()
        # todo judge this word neigher or have sentence
        have = self.haveSentence()
        if have:
            self.word.EnglishMeans = self.operator.find_xpth(
                '/html/body/div[1]/div/div/div[1]/div[1]/ul/li[1]/span[2]').text
            sentence1.EnglishMeans = self.operator.find_xpth(
                "//div[@class='sen_en b_regtxt']").text
            sentence1.chineseMeans = self.operator.find_xpth(
                '/html/body/div[1]/div/div/div[1]/div[2]/div[2]/div[4]/div[1]/div[2]/div[2]').text
            time.sleep(3)
            self.sentence.append(self.getSentenceJapanese(sentence1))
        else:
            return

    def getSentenceFromYoudao(self):
        """_summary_
            从有道翻译页面，获取短语以及例句
            1.到达有道页面
            2.获取所有的短语
            3.遍历短语，取出前三个
            例句同上（可以取一个）
        """
        print("正在从有道获取例句和短语：")
        self.operator.gotoPage(U.Youdao_url)
        time.sleep(1)
        self.operator.find_xpth("//span[@class='arrow']").click()
        time.sleep(1)
        self.operator.find_xpth(
            '/html/body/div[5]/div/form/div[1]/ul/li[4]').click()
        self.operator.find_xpth(
            "//input[@name='q']").send_keys(self.chineseMeansWordOne)
        self.operator.find_xpth('/html/body/div[5]/div/form/button').click()
        phase1 = Sentence(kind=1)
        phrasew = self.operator.find_xpth("//div[@class='more']")
        if phrasew:
            phrasew.click()
        # 获取短语
        time.sleep(1)
        AllPhrase = self.operator.find_xpth("//div[@id='webPhrase']").text
        phraseList = AllPhrase.splitlines()
        for p in phraseList:
            res = p.split(' ')
            if len(res) == 2:
                if len(res[0]) == 0 or len(res[1]) == 0:
                    continue
                subPhrase = Sentence(kind=1)
                subPhrase.chineseMeans = res[0]
                subPhrase.japaneseMeans = res[1]
                print("中： " + res[0]+" 日：" + res[1])
                self.phrase.append(subPhrase)
        # 获取例句
        time.sleep(1)
        allSentence = self.operator.find_xpth(
            "//div[@class='trans-container  tab-content']/ul[@class='ol']").text
        sentenceList = allSentence.split('youdao')
        for s in sentenceList:
            subSentence = Sentence(kind=2)
            s1 = s.splitlines()
            if len(s1) == 3 and s1[0] == "":
                subSentence.chineseMeans = s1[1]
                subSentence.japaneseMeans = s1[2]
                # todo get englishmenas
            elif len(s1) == 2:
                subSentence.chineseMeans = s1[0]
                subSentence.japaneseMeans = s1[1]
            else:
                continue
                # todo get englishmenas
            self.sentence.append(subSentence)
        # sentence = [1,2,3,4,5,6]
        # # sentence = sentence[:3]
        # for i in range(len(sentence)):
        #     if i > 3:
        #         break
        #     print(sentence[i])

    def getSentenceJapanese(self, sentence1):
        print("正在获取单词例句日语意思：")
        # gotohujiangtrans
        time.sleep(2)
        self.operator.gotoPage("https://www.hjdict.com/app/trans")
        self.operator.find_xpth(
            '/html/body/div[1]/div/article/header/span[1]/span[1]').click()
        self.operator.find_xpth('/html/body/div[3]/ul/li[3]/div').click()
        self.operator.find_xpth(
            '/html/body/div[1]/div/article/header/span[3]/span[1]').click()
        self.operator.find_xpth('/html/body/div[4]/ul/li[4]/div').click()
        self.operator.find_xpth(
            '/html/body/div[1]/div/article/section[1]/textarea').send_keys(sentence1.EnglishMeans)
        self.operator.find_xpth(
            "//button[@class='button translate-btn translate-btn-primary']").click()
        time.sleep(2)
        sentence1.japaneseMeans = self.operator.find_xpth(
            '/html/body/div[1]/div/article/section[2]/div[2]').text
        sentence1.voiceUrl = self.operator.find_xpth(
            "//span[@class='translate-pronunciation word-audio audio']").text
        return sentence1

    def haveSentence(self):
        return True

    def getPhrase(self):
        pass

    def getJson(self):
        self.word.phrase = self.phrase
        self.word.sentence = self.sentence
        return json.dumps(self.word, default=lambda o: o.__dict__, sort_keys=True, ensure_ascii=False, indent=4)

    def getWord(self):
        self.word.phrase = self.phrase
        self.word.sentence = self.sentence
        return self.word
    
    def uploadToDatabase(self, RequestData):
        res = requests.post(U.api_addWordAndSentence,data=RequestData.encode('utf-8'))
        print(res.json)


class conf():
    def __init__(self):
        self.path = ""
        self.wordList = []
        self.kindBook = 0

    def readFile(self, path=""):
        path = self.path
        try:
            with open(path, "r") as fp:
                line_no = 0
                for line in fp:
                    line_no = line_no + 1
                    content = line
                    pos = content.find("#")
                    if -1 != pos:
                        content = content[:pos]
                    content = content.strip()
                    if 0 == len(content):
                        continue
                    self.wordList.append(content)
        except IOError as e:
            print("读取文件操作 失败")
            print(e)


def start():

    wordbook = conf()
    wordbook.path = word_path
    wordbook.readFile()
    res = []
    for i in wordbook.wordList:
        tool = Tool()
        tool.getWordInfoFromHujiang(i)
        # tool.getSentenceFromBing()
        tool.getSentenceFromYoudao()
        ret = tool.getJson()
        tool.uploadToDatabase(ret)
        print(ret)
        res.append(tool.getWord())
        time.sleep(10)

    # time.sleep(10)

    # res.append(word1)
    # json_str = json.dumps(res, default=lambda o: o.__dict__, sort_keys=True,ensure_ascii=False, indent=4)
    # print(json_str)
    operator.quit()


# driver.get("https://www.hjdict.com/jp/")


if __name__ == "__main__":

    start()
