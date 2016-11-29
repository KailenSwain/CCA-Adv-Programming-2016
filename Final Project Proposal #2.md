# Mini self-driving car with some sort of camera/interaction aspect
Adding autonomous driving capabilities to a rc car, and creating an interactive aspect

## Summary

I want to create something similar to google's self driving cars on a mini scale. Probaly not going to use the same
technology either, but I was thinking of trying to create something similar to the google streetview cars. It would
drive around without any form of human guidance, and either record video or take pictures when something is triggered. Maybe
if it is driving around, and detects fast movement or a certain noise level, the a camera is triggered. I am not sure about 
photo/video transmission methods, but was also considering maybe a livestream from the car to a webpage or something similar. 

I have found some example projects of hacking toy rc cars, and figured I could start there.
I also have been doing research on first person video streaming for drones, but wanted to hear thoughts on how well 5ghz signal 
works indoors without line-of-sight.
I am probably going to start with ultrasonic distance sensors for collision detection.
  

Include a discussion how it will be interactive or responsive to the environment.

## Component Parts

-rc car- ordered already
-ultrasonic ping sensors - ordered already
-arduino uno or mkr100 - own already
-camera - I own a gopro and a webcam, should be enough
-gopro/camera composite cable?
-arduino motor control board- owned already
-sugru- ordered
-


Include what types of inputs/outputs/data it will use, and a block diagram showing how all those pieces are connected.
-


          input:                                 controller:                         output:
      Ultrasonic ping sensors                arduino uno or mkr1000                 dc motors (wheels)
      Motion sensor?                                                           something to trigger a camera/webcam
         
         
         
         



## Challenges

I honestly think that there are two parts to this that will be the hardest:
1. time constraint- I am flying to the east coast on wednesday morning
   
2. figuring out the camera transmission part


## Timeline

What parts of the project do you anticipate you will complete in each of the next 5 weeks? Your goal is to solve the scary problems as quickly as possible! 

- Week 1: Write proposal
- Week 2: order parts
- Week 3: get the driving working
- Week 4: camera working
- Week 5: Present!

## References and link

this is a living section- will be evolving as my research moves forward

http://www.instructables.com/id/Arduino-Powered-Autonomous-Vehicle/?ALLSTEPS
http://makezine.com/projects/build-android-powered-autonomous-rc-car/

http://www.pyimagesearch.com/2015/03/30/accessing-the-raspberry-pi-camera-with-opencv-and-python/
http://opencv.org
https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/using-dc-motors
http://www.instructables.com/id/Autonomous-Control-of-RC-Car-Using-Arduino/
