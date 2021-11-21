from typing import List, Optional

from pydantic import BaseModel


# This file contains the Pydantic models where we define a schema

class LoanBase(BaseModel):
    grade: str

class LoanCreate(LoanBase):
    pass

class Loan(LoanBase):
    id:str
    borrower_id:int

    class Config:
        orm_mode = True

class BorrowerBase(BaseModel):
    email: str

class BorrowerCreate(BorrowerBase):
    pass


class Borrower(BorrowerBase):
    id: str
    loans: List[Loan] = []

    class Config:
        orm_mode = True