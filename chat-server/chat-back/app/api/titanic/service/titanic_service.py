from dataclasses import dataclass
from app.api.titanic.model.titanic_model import TitanicModel
import pandas as pd


class TitanicService:

    model = TitanicModel()

    def process(self):
        print(f'프로세스 시작')
        this = self.model
        this.train_model = self.new_model('train.csv')
        this.test_model = self.new_model('test.csv')
        # self.df_info(this)
        print(f'트레인 컬럼 : {this.train_model.columns}')
        print(f'테스트 컬럼 : {this.test_model.columns}')
        this.id = this.test['PassengerId']

        #드랍 feature 할 곳
        this = self.drop_feature(this, 'Name', 'SlbSp', 'Parch', 'Cabin', 'Ticket')
        print(f'트레인 컬럼 : {this.train_model.columns}')
        print(f'테스트 컬럼 : {this.test_model.columns}')
        this = self.create_train(this)


    def new_model(self, payload) -> object:
        this = self.model
        this.context = './app/api/titanic/data/'
        this.fname = payload
        return pd.read_csv(this.context + this.fname)
    
    @staticmethod
    def create_train(this) -> str:
        return this.train.drop('Survived',axis=1) #axis = 0 : 행(가로), axis = 1 : 열(세로:axis=축)
    
    @staticmethod
    def create_label(this) -> str:
        return this.train['Survived']
    
    @staticmethod
    def drop_feature(this, *feature) -> object:
        # for i in feature:
        #     this.train = this.train.drop([i], axis=1)
        #     this.train = this.test.drop(i, axis=1)

        # for i in [this.train, this.test]:
        #     for j in feature:
        #         i.drop(j, axis=1, inplace=True)
        # [i.drop(j, axis=1, inplace=True) for j in feature for i in [this.train, this.test]]
        [(i.drop(j, axis=1, inplace=True)) for j in feature for i in [this.train, this.test] if j in i.columns]

        return this
    
    @staticmethod
    def df_info(this):
        [print(i.head()) for i in [this.train, this.test]]