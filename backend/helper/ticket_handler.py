from models import TicketSend,TicketRead,Time
from fastapi.exceptions import HTTPException
from datetime import datetime

tickets:list[TicketSend] = [
    TicketSend(
    vehicle_number="ka05cd7890",
    description="Overnight parking in no-parking zone",
    amount=250,
    parked_at=Time(
        hour=9,
        minutes=15,
        day=30,
        month=1,
        year=2026
    ),
    owner_name="Suresh"
),

TicketSend(
    vehicle_number="tn10ef4321",
    description="Blocked driveway access",
    amount=500,
    parked_at=Time(
        hour=14,
        minutes=40,
        day=29,
        month=1,
        year=2026
    ),
    owner_name="Karthik"
),

TicketSend(
    vehicle_number="mh12gh9988",
    description="Parked in disabled parking spot",
    amount=1000,
    parked_at=Time(
        hour=11,
        minutes=5,
        day=28,
        month=1,
        year=2026
    ),
    owner_name="Amit"
),

TicketSend(
    vehicle_number="dl03jk2468",
    description="Parking during restricted hours",
    amount=300,
    parked_at=Time(
        hour=18,
        minutes=25,
        day=27,
        month=1,
        year=2026
    ),
    owner_name="Vikram"
),

TicketSend(
    vehicle_number="gj01lm1357",
    description="Double parking causing obstruction",
    amount=400,
    parked_at=Time(
        hour=7,
        minutes=50,
        day=26,
        month=1,
        year=2026
    ),
    owner_name="Nilesh"
),
TicketSend(
    vehicle_number="ap09xy1122",
    description="Vehicle parked on footpath",
    amount=200,
    parked_at=Time(
        hour=8,
        minutes=10,
        day=25,
        month=1,
        year=2026
    ),
    owner_name="Pradeep"
),

TicketSend(
    vehicle_number="ka02mn7788",
    description="Parking near fire hydrant",
    amount=600,
    parked_at=Time(
        hour=13,
        minutes=55,
        day=24,
        month=1,
        year=2026
    ),
    owner_name="Naveen"
),

TicketSend(
    vehicle_number="tn07qr4455",
    description="Unauthorized parking in residential area",
    amount=350,
    parked_at=Time(
        hour=21,
        minutes=30,
        day=23,
        month=1,
        year=2026
    ),
    owner_name="Arun"
),

TicketSend(
    vehicle_number="mh04st8899",
    description="Vehicle blocking emergency exit",
    amount=800,
    parked_at=Time(
        hour=16,
        minutes=45,
        day=22,
        month=1,
        year=2026
    ),
    owner_name="Rohit"
),

TicketSend(
    vehicle_number="dl08uv5566",
    description="Improper parking near bus stop",
    amount=450,
    parked_at=Time(
        hour=10,
        minutes=20,
        day=21,
        month=1,
        year=2026
    ),
    owner_name="Ankit"
),

TicketSend(
    vehicle_number="gj05wx3344",
    description="Parking on pedestrian crossing",
    amount=700,
    parked_at=Time(
        hour=19,
        minutes=5,
        day=20,
        month=1,
        year=2026
    ),
    owner_name="Hardik"
),

TicketSend(
    vehicle_number="pb11yz6677",
    description="Vehicle parked without valid permit",
    amount=550,
    parked_at=Time(
        hour=6,
        minutes=35,
        day=19,
        month=1,
        year=2026
    ),
    owner_name="Gurpreet"
),

TicketSend(
    vehicle_number="rj14ab9090",
    description="Parking in loading/unloading zone",
    amount=650,
    parked_at=Time(
        hour=12,
        minutes=0,
        day=18,
        month=1,
        year=2026
    ),
    owner_name="Mahesh"
),

TicketSend(
    vehicle_number="up16cd2233",
    description="Vehicle parked too close to intersection",
    amount=300,
    parked_at=Time(
        hour=17,
        minutes=15,
        day=17,
        month=1,
        year=2026
    ),
    owner_name="Ravi"
),
TicketSend(
    vehicle_number="wb20ef7788",
    description="Illegal roadside parking",
    amount=400,
    parked_at=Time(
        hour=15,
        minutes=50,
        day=16,
        month=1,
        year=2026
    ),
    owner_name="Sanjay"
)



]

amount_per_minute = 10

def remove_ticket(vehicle_number:str)->str:
    for idx,ticket in enumerate(tickets):
        if ticket.vehicle_number == vehicle_number:
            del tickets[idx]
            return vehicle_number
        
    raise HTTPException(status_code=404,detail="ticket with "+vehicle_number+"does not exists")

def pre_process_amount(ticket:TicketSend)->TicketSend:
    current = datetime.now() 
    ticket.amount = 100+((((current - to_dateTime(ticket.parked_at)).total_seconds())//60)*amount_per_minute)
    return ticket

def get_ticket_by_id(vehicle_number:str)->TicketSend:
    
    for ticket in tickets:
        if ticket.vehicle_number == vehicle_number:
            return pre_process_amount(ticket)
        
    raise HTTPException(status_code=404,detail="ticket with "+vehicle_number+"does not exists") 

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
    if ticket.vehicle_number in [tkt.vehicle_number for tkt in tickets] :
        raise HTTPException(status_code=404,detail='ticket with same vehicle number already exists')
    
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