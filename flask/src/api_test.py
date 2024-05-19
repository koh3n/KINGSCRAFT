import requests
import os


server = 'http://localhost:5000/'
username = 'test-user-2'

def upload_test():
    url = server+'upload'

    with open('./flask/chess.png', 'rb') as img:
        image_data = img.read()
    file = {'image': image_data}
    data = {'user-name': username, 'file-name': 'chess.png'}
    response = requests.post(url, data=data, files=file)
    print(response.text)

def preprocess_test():
    url = server + 'process'
    data = {'user-name': username, 'file-name': 'chess.png'}
    response = requests.post(url, data=data)
    print(response.text)

def multiview_test():
    url = server + 'multiview'
    data = {'user-name': username, 'file-name': 'chess.png'}
    response = requests.post(url, data=data)
    print(response.text)
#upload_test()
#preprocess_test()
multiview_test()