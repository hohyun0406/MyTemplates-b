from dataclasses import dataclass
import pandas as pd


@dataclass
class CrimeModel:
    _dname : str = ''
    _sname : str = ''
    _fname : str = ''#crime
    _fname2 : str = ''#cctv

    @property
    def dname(self) -> str : return self._dname
    @dname.setter
    def dname(self, dname: str) : self._dname = dname
    @property
    def sname(self) -> str: return self._sname
    @sname.setter
    def sname(self, sname: str): self._sname = sname
    @property
    def fname(self) -> str: return self._fname
    @fname.setter
    def fname(self, fname: str): self._fname = fname

    @property
    def fname2(self) -> str: return self._fname2
    @fname2.setter
    def fname2(self, fname2: str): self._fname2 = fname2