from models import Ticket
from fastapi.exceptions import HTTPException


tickets:list[Ticket] = []
    
def add_ticket(ticket:Ticket)->Ticket:
    tickets.append(ticket)
    return ticket

def remove_ticket(ticket_id:str)->str:
    for idx,ticket in enumerate(tickets):
        if ticket.ticket_id == ticket_id:
            del tickets[idx]
            return ticket_id
        
    raise HTTPException("ticket with "+ticket_id+"does not exists")

def get_all_tickets()->list[Ticket]:
    return tickets

def get_ticket_by_id(ticket_id:str)->Ticket:
    
    for ticket in tickets:
        if ticket.ticket_id == ticket_id:
            return ticket
        
    raise HTTPException("ticket with "+ticket_id+"does not exists") 