## Parking Tickets

## Setup - Backend
- **Note:Python is required (3.14 recommended)**

- Open backend folder and create a python virtual environment using terminal or command prompt
    ```
    python -m venv env
    ```
- Activate 
    
    - Linux
        ```
        source env/bin/activate
        ```
    - Windows
        ```
        cd env/Scripts/ && ./activate && cd ../../
        ```
- install and run python server
    ```
    pip install -r requirements.txt && python main.py
    ```

## Setup - frontend
- Direct Installation
    - Install the apk from releases
    - connect ur mobile device to the same wifi as backend
    - change the backend api ip to python backend
    - add delete the parking tickets

- Developement
    - **Note:Android Studio,Android Build Tools and nodejs are required**
    - open frontend_app folder in terminal or cmd prompt
    - connect ur mobile device to the same wifi as backend
    - connect ur mbl to ur pc using usb
    - check for ur device using 
        ```
        adb devices
        ```
    - run below command after its connected
        ```
        npm install && npm run android
        ```

## Note 
 Noting works in front end without turning backend on and setting ip correctly ..!!!

### Reach me - dhanushnatra2@gmail.com
😁 Happy coding