from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import queries, models, schemas
from database import SessionLocal, engine

import json

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/json')
def ping():
    with open("./data/loan.json") as f:
        loan_data = json.load(f)
    return loan_data

@app.get('/borrowers')
def read_borrowers(skip: int = 0, limit: int = 500, db: Session = Depends(get_db)):
    borrowers = queries.get_borrowers(db, skip=skip, limit=limit)
    return borrowers

@app.get('/loans')
def read_loans(skip: int = 0, limit: int = 500, db: Session = Depends(get_db)):
    loans = queries.get_loans(db, skip=skip, limit=limit)
    return loans


    
