import pandas as pd
import numpy as np
from app.api.context.datasets import DataSets
import icecream as ic

CONTEXT = 'C:\\Users\\bitcamp\\IdeaProjects\\rod\\chat-server\\chat-back\\app\\api\\context\\'

class Models:
    def __init__(self) -> None:
        self.ds = DataSets()
        self.ds.dname = f'{CONTEXT}data/'
        self.ds.sname = f'{CONTEXT}save/'

    def new_dataframe_with_index(self, fname: pd.DataFrame) -> pd.DataFrame:
        # index_col=0 해야 기존 index 값이 유지된다
        # 0 은 컬럼명 중에서 첫번째를 의미한다(배열구조)
        # pd.read_csv(f'경로/파일명/csv', index_col=0 = '인덱스로 지정할 column 명') Index 지정

     
        return pd.read_csv(f'{self.ds.dname}{fname}', index_col=0)
    
    def new_dataframe_no_index(self, fname: str) -> object:
        # pd.read_csv('경로/파일명.csv') Index 를 지정하지 않음
        return pd.read_csv(f'{self.ds.dname}{fname}')

    def save_model(self, fname, dfname) -> pd.DataFrame:
        this = self.ds
        '''
        풀옵션은 다음과 같다
        df.to_csv(f'{self.ds.sname}{fname}',sep=',',na_rep='NaN',
                         float_format='%.2f',  # 2 decimal places
                         columns=['ID', 'X2'],  # columns to write
                         index=False)  # do not write index
        '''
        return dfname.to_csv(f'{this.sname}{fname}', sep=',', na_rep="NaN") # 0 행, 1 열
    
    