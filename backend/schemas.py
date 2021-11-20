from graphene import String, Int, ObjectType

class Loans(ObjectType):
    id = String(required=True)
    loan_id = String(required=True)
    amount = Int(required=True)
    term = Int(required=True)
    interest = Int(required=True)
    grade = String(required=True)
    status = String(required=True)
    borrower = String(required=True)