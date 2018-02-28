from pymongo import MongoClient
import time
import datetime
import json
from random import randint

i = 0
data = []

def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

while i < 1: #number of docs
    i = i+1
    #Simulated sleep time.
    time.sleep(.1) #wait period
    #Grabbing some current point status variables.
    currentDateTime = datetime.datetime.now()
    currentDate = datetime.date.today()
    currentYear = currentDate.year
    currentMonth = currentDate.month
    currentDay = currentDate.day
    fakeTemp = randint(60,85)
    fakeHumid = randint(50,80)
    randomLightInt = randint(0,4)
    if randomLightInt == 0:
        fakeLightStatus = 0 #
        # print("off")
    else:
        fakeLightStatus = 1
        # print("on")
    randomOccInt = randint(0,8)
    if randomOccInt == 0:
        fakeOccStatus = 0
    else:
        fakeOccStatus = 1

    def format_time():
       t = datetime.datetime.now()
       s = t.strftime('%Y-%m-%dT%H:%M:%S.%f')
       tail = s[-7:]
       f = round(float(tail), 3)
       temp = "%.3f" % f
       return "%s%s" % (s[:-7], temp[1:])

    hi = format_time()+'Z'

    data.append({"timestamp":hi, "humidity":fakeHumid, "temperature":fakeTemp,  "lightstatus":fakeLightStatus , "occupancystatus":fakeOccStatus})

print("done")
with open('dataTest.json', 'w') as outfile:
    json.dump(data, outfile, default = myconverter)
