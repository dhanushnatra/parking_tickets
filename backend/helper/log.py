from datetime import datetime
from os import listdir

def create_or_get_log_file():
    if "log.csv" not in listdir():
        with open("log.csv","w") as log:
            log.write("error,time")
    
    log_file = open("log.csv")
    return log_file


log_file = create_or_get_log_file()



def add_content_to_log(content:str):
    log_file.write(content+","+str(datetime.now())+'\n')


def close_log():
    log_file.close()