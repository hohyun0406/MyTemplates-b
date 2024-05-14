from dataclasses import dataclass
from icecream import ic
from app.api.titanic.model.titanic_model import TitanicModel
import pandas as pd


class TitanicService:

    model = TitanicModel()

    def process(self):
        print(f'프로세스 시작')
        this = self.model
        feature = ['PassengerId','Survived','Pclass','Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked']

        this.train_model = self.new_model('train.csv')
        this.test_model = self.new_model('test.csv')
        self.df_info(this)
        print(f'트레인 컬럼 : {this.train_model.columns}')
        print(f'테스트 컬럼 : {this.test_model.columns}')
        # this.id = this.test['PassengerId']

        this = self.name_nominal(this)
        #드랍 feature 할 곳
        this = self.drop_feature(this, 'Name', 'SibSp', 'Parch', 'Ticket', 'Cabin')
        this = self.pclass_ordinal(this)
        this = self.sex_nominal(this)
        this = self.age_ratio(this)
        this = self.fare_ratio(this)
        this = self.embarked_nominal(this)

        print(f'트레인 컬럼 : {this.train_model.columns}')
        print(f'테스트 컬럼 : {this.test_model.columns}')
        self.df_info(this)
        
        # this = self.create_train(this)
    
    @staticmethod
    def create_train(this) -> str:
        return this.train.drop('Survived',axis=1) #axis = 0 : 행(가로), axis = 1 : 열(세로:axis=축)
    
    @staticmethod
    def create_label(this) -> str:
        return this.train['Survived']
    
    @staticmethod
    def df_info(this):
        [print(f'{i}') for i in [this.train_model, this.test_model]]

    @staticmethod
    def pclass_ordinal(this) -> object:
        return this
    
    @staticmethod
    def name_nominal(this) -> object:
        return this.train_model['Name']
    
    @staticmethod
    def extract_title_from_name(this) -> object:
        combine = [this.train, this.test]
        for i in combine:
            i['Title'] = i['Name'].str.extract('([A-Za-z]+)\.')
        return this

    @staticmethod
    def sex_nominal(this) -> object:
        return this.train_model['Sex']

    @staticmethod
    def age_ratio(this) -> object:
        return this.train_model['Age']

    @staticmethod
    def fare_ratio(this) -> object:
        return this.train_model['Fare']

    @staticmethod
    def embarked_nominal(this) -> object:
        return this.train_model['Embarked']