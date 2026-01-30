var base_ip = '192.168.0.9'

const baseUrl = `http://${base_ip}:8000/`

const add_ticket = async (vehicle_number, description, owner_name) => {
    const resp = await fetch(baseUrl+"tickets/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({vehicle_number, description, owner_name})
    });
    if (resp.ok) {
        const data = await resp.json();
        return data['vehicle_number'];
    }
    else throw Error(`adding ${vehicle_number} failed`);
}

const delete_ticket = async (vehicle_number) => {
    const resp = await fetch(baseUrl+"tickets/" + vehicle_number, {method: 'DELETE'});
    if (resp.ok) return;
    else throw Error('error deleting ' + vehicle_number);
}

const get_all_tickets = async () => {
    const resp = await fetch(baseUrl+"tickets/");
    if (resp.ok) {
        const data = await resp.json();
        return data;
    }
    else throw Error('error fetching tickets');
}


const get_ticket_by_id=async({vehicle_number})=>{
    const resp = await fetch(baseUrl+"tickets/"+vehicle_number);
    if (resp.ok) return resp.json()
    else throw Error(`error getting ticket of id ${vehicle_number}`)
}


const set_ip = async(new_ip) =>{
    base_ip = new_ip
    const  health_check =  await fetch(baseUrl+'health');
    console.log(health_check);
    if (health_check.ok){
        console.log(await health_check.text())
    }
    else console.log(await health_check.text());
}


export {add_ticket,delete_ticket,get_all_tickets,get_ticket_by_id,set_ip,base_ip}