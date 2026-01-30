from fastapi.responses import Response
from fastapi.routing import APIRouter
from models import TicketSend,TicketRead
from helper.ticket_handler import get_all_tickets,get_ticket_by_id,remove_ticket,add_ticket
from fastapi.exceptions import HTTPException
from helper.log import add_content_to_log

router = APIRouter(prefix='/tickets')


@router.get('/')
def get_all_vehicles_end()->list[TicketSend]:
    return get_all_tickets()

@router.post('/')
def add_ticket_end(ticket:TicketRead):
    """add a ticket to list of tickets"""
    try:
        return add_ticket(ticket)
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("vehicle already exists with same details",404)

@router.get('/{vehicle_number}')
def get_ticket_by_id_end(vehicle_number: str):
    try:
        return get_ticket_by_id(vehicle_number=vehicle_number)
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("ticket with id does not exist", 404)
    
@router.delete('/{vehicle_number}')
def delete_ticket_by_id_end(vehicle_number:str):
    try:
        return remove_ticket(vehicle_number=vehicle_number)
    
    except HTTPException as he:
        add_content_to_log(content=he)
        return Response("vehicele with id doesnot exists",404)
