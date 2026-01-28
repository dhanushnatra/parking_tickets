from app import app
import uvicorn
from helper.log import close_log

if __name__ =="__main__":
    uvicorn.run(app=app,host="0.0.0.0",port=8000)
    close_log()