from fastapi import FastAPI
from router import vehicles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=['GET','POST','DELETE']
)


app.include_router(vehicles.router)