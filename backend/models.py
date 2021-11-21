from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base

# This file contains the SQLAlchemy models with tablenames, fields and relationships

class Borrower(Base):
    __tablename__ = "borrowers"

    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    gender = Column(String)
    Income = Column(Integer)
    years_worked = Column(Integer)
    fico_score = Column(Integer)
    dti = Column(Integer)

    loans = relationship("Loan", back_populates="borrower")

class Loan(Base):
    __tablename__ = "loans"

    id = Column(String, primary_key=True, index=True)
    amount = Column(Integer)
    term = Column(Integer)
    interest = Column(Integer)
    grade = Column(String)
    status = Column(String)
    borrower_id = Column(Integer, ForeignKey("borrowers.id"))

    borrower = relationship("Borrower", back_populates="loans")
