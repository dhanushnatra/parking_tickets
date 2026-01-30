from app import app
import uvicorn
import socket
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

print(f"\n\nBackend running at http://{get_local_ip()}:8000\n\n")

if __name__ =="__main__":
    uvicorn.run(app=app,host="0.0.0.0",port=8000)