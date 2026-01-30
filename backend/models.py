from pydantic import BaseModel
from typing import TypedDict
from datetime import datetime
class Time(TypedDict):
    hour:int
    minutes:int
    day:int
    month:int
    year:int
    


class TicketSend(BaseModel):
    vehicle_number:str
    description:str
    amount:int
    parked_at:Time
    owner_name:str

class TicketRead(BaseModel):
    vehicle_number:str
    description:str
    owner_name:str