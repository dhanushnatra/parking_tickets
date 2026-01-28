from pydantic import BaseModel
from uuid import uuid4


class Ticket(BaseModel):
    ticket_id:str = str(uuid4())
    vehicle_number:str
    description:str
    vehicle_type:str
    owner_name:str
