from sqlalchemy.orm import Session

import models, schemas

def get_borrowers(db: Session, skip: int = 0, limit: int = 500):
    return db.query(models.Borrower).offset(skip).limit(limit).all()

def get_loans(db: Session, skip: int = 0, limit: int = 500):
    return db.query(models.Loan).offset(skip).limit(limit).all()