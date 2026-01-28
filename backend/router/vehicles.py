from fastapi.responses import Response
from fastapi.routing import APIRouter
from models import Ticket
from helper.ticket_handler import get_all_tickets,get_ticket_by_id,remove_ticket,add_ticket
from fastapi.exceptions import HTTPException
from helper.log import add_content_to_log

router = APIRouter(prefix='/tickets')


@router.get('/')
def get_all_vehicles()->list[Ticket]:
    return get_all_tickets()

@router.post('/')
def add_ticket(ticket:Ticket):
    """add a ticket to list of tickets"""
    try:
        return add_ticket(ticket)
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("vehicle already exists with same details",404)

@router.get('/{ticket_id}')
def get_ticket_by_id(ticket_id: str):
    try:
        return get_ticket_by_id(ticket_id=ticket_id)
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("ticket with id does not exist", 404)
    
@router.delete('/')
def delete_ticket_by_id(ticket_id:str):
    try:
        return remove_ticket(ticket_id=ticket_id)
    
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("vehicele with id doesnot exists",404)
