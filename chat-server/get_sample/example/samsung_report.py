import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import konlpy
from konlpy.tag import Kkma, Komoran, Okt, Hannanum
import nltk
import re
import pandas as pd
from nltk.tokenize import word_tokenize
from nltk import FreqDist
from wordcloud import WordCloud 
import matplotlib.pyplot as plt
from icecream import ic
import tweepy

from context.model.data_model import DataModel

class SamsungReport:

    def __init__(self):
        self.okt = Okt()
        self.data = DataModel()
        self.data.dname = './example/data/'
        self.data.fname = 'kr-Report_2018.txt'
        text = '코드잇에 오신 걸 환영합니다'
        self.result = ''
        self.nouns = []
        self.stopwords = []

        # print(self.okt.morphs(text))

    def preprocessing(self):
        self.okt.pos('삼성전자 글로벌센터 전자사업부', stem=True)
        with open(f'{self.data.dname}{self.data.fname}', 'r', encoding='utf-8') as f:
            texts = f.read()
        texts = texts.replace('\n',' ')
        tokenizer = re.compile(r'[^ㄱ-힣]+')

        # print(tokenizer.sub(' ', texts))

        self.result = tokenizer.sub(' ', texts)

    def noun_embedding(self):
        tokens = word_tokenize(self.result)
        for token in tokens:
            pos = self.okt.pos(token)
            _ = [j[0] for j in pos if j[1] == 'Noun']
            if len(''.join(_)) > 1:
                self.nouns.append(''.join(_))

    def stopword_embeding(self):
        self.okt.pos('삼성전자 글로벌센터 전자사업부', stem=True)
        fname = 'stopwords.txt'
        with open(f'{self.data.dname}{fname}', 'r', encoding='utf-8') as f:
            stopwords = f.read()
        self.stopwords = stopwords.split(' ')


    def morpheme_embedding(self):
        print(self.nouns[:10])
        print('*'*100)
        print(self.stopwords[:10])
        self.morphemes = [word for word in self.nouns if word not in self.stopwords]

    def draw_wordcloud(self):
        _ = self.morphemes
        freqtext = pd.Series(dict(FreqDist(_))).sort_values(ascending=False)
        print(freqtext[:10])
        wcould = WordCloud(f'{self.data.dname}D2Coding.ttf', relative_scaling=0.2, background_color='white').generate_from_frequencies(freqtext)
        plt.figure(figsize=(12,12))
        plt.imshow(wcould, interpolation='bilinear')
        plt.axis('off')
        plt.show()



if __name__=='__main__':
    # nltk.download('punkt')
    samsung = SamsungReport()
    samsung.preprocessing()
    samsung.noun_embedding()
    samsung.stopword_embeding()
    samsung.morpheme_embedding()
    samsung.draw_wordcloud()

'''
문장 형태의 문자 데이터를 전처리할 때 많이 사용되는 방법이다. 
말뭉치(코퍼스 corpus)를 어떤 토큰의 단위로 분할하냐에 따라 
단어 집합의 크기, 단어 집합이 표현하는 토크의 형태가 다르게 나타나며 
이는 모델의 성능을 좌지우지하기도 한다. 
이때 텍스트를 토큰의 단위로 분할하는 작업을 토큰화라고 한다. 
토큰의 단위는 보통 의미를 가지는 최소 의미 단위로 선정되며, 
토큰의 단위를 단어로 잡으면 Word Tokenization이라고 하고, 
문장으로 잡으면 Sentence Tokeniazation이라고 한다. 
영어는 주로 띄어쓰기 기준으로 나누고, 
한글은 단어 안의 형태소를 최소 의미 단위로 인식해 적용한다.

형태소(形態素, 영어: morpheme)는 언어학에서 의미가 있는 가장 작은 말의 단위이다.
코퍼스(영어: corpus) 말뭉치는 언어학에서 주로 구조를 이루고 있는 텍스트 집합이다.
코퍼스(corpus)는 단어들을 포함한다.
임베딩(embedding)은 변환한 벡터들이 위치한 공간이다.
단어(word)는 일반적으로 띄어쓰기나 줄바꿈과 같은 공백 문자(whitespace)로 
나뉘어져 있는 문자열의 일부분이다.
단어를 벡터로 변환하는 경우 단어 임베딩(word embedding)이다. 
각 문장을 벡터로 변환하는 경우 문장 임베딩(sentence embedding)이다. 
단어 임베딩이란 앞서 말씀드린 바와 같이 
이 각각 하나의 좌표를 가지도록 형성한 벡터공간이다.
1. Preprocessing : kr-Report_2018.txt 를 읽는다.
2. Tokenization : 문자열(string)을 다차원 벡터(vector)로 변환
3. Token Embedding
4. Document Embedding

JDK-19에서 JPype 설치

conda install -c conda-forge jpype1
pip install konlpy



__main__ 에서 nltk.download('punkt') 실행


import konlpy
from konlpy.tag import Kkma, Komoran, Okt, Hannanum

okt = Okt()
text = '코드잇에 오신 걸 환영합니다'

print(okt.morphs(text))

결과 : ['코드','잇에','오신','걸','환영','합니다']
'''