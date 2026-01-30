from models import TicketSend,TicketRead,Time
from fastapi.exceptions import HTTPException
from datetime import datetime

tickets:list[TicketSend] = []

amount_per_minute = 10

def remove_ticket(vehicle_number:str)->str:
    for idx,ticket in enumerate(tickets):
        if ticket.vehicle_number == vehicle_number:
            del tickets[idx]
            return vehicle_number
        
    raise HTTPException("ticket with "+vehicle_number+"does not exists")

def pre_process_amount(ticket:TicketSend)->TicketSend:
    current = datetime.now() 
    ticket.amount = 100+((((current - to_dateTime(ticket.parked_at)).total_seconds())//60)*amount_per_minute)
    return ticket

def get_ticket_by_id(vehicle_number:str)->TicketSend:
    
    for ticket in tickets:
        if ticket.vehicle_number == vehicle_number:
            return pre_process_amount(ticket)
        
    raise HTTPException("ticket with "+vehicle_number+"does not exists") 

def to_dateTime(time:Time)->datetime:
    return datetime(
        year=time["year"],
        month=time["month"],
        day=time["day"],
        hour=time["hour"],
        minute=time["minutes"]
) 


def get_time_now()->Time:
    current=datetime.now()
    time_to_return = Time(
        day=current.day,
        month=current.month,
        year=current.year,
        minutes=current.minute,
        hour=current.hour,
    )
    return time_to_return

def add_ticket(ticket:TicketRead)->TicketSend:
    ticket_processed = TicketSend(
        amount=100,
        parked_at=get_time_now(),
        description=ticket.description,
        owner_name=ticket.owner_name,
        vehicle_number=ticket.vehicle_number
    )
    tickets.append(ticket_processed)
    return ticket_processed



def get_all_tickets()->list[TicketSend]:
    return [pre_process_amount(ticket) for ticket in tickets]