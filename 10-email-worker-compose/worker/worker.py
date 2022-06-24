import redis
import json
from time import sleep
from random import randint
import os

if __name__ == '__main__':
    redis_host = os.getenv("REDIS_HOST", "queue")
    r = redis.Redis(host=redis_host, port=6379, db=0)

    print("Aguardando mensagens ...")

    while True:
        message = json.loads(r.blpop('sender')[1])
        # Simular envio de e-mail
        print("Mandando a mensage: ", message["subject"])
        sleep(randint(15,45))
        print("Mensagem", message["subject"], "enviada")
