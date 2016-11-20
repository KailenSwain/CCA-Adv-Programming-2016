# Interactive Beanie Baby

A Beanie Baby that reacts to human interaction

## Summary

**I have completely changed my project proposal from what I talked about in class,I thought it would be interesting
  yet not that creative to basically create a nest camera

I want to basically open up a beanie baby or some sort of stuffed animal, add servo motors, sensors, lights, actuators, and some sort of microcontroller.
I want some channel of human inteaction such as gestures or noise, to which the stuffed animal will respond through movement.
A potential action is, if it detects movement, motors activate and make it move backwards. 

On a side note, I was thinking instead of using a sensor for movement, I could use an IFTTT trigger connected
to some sort of a wifi board (mkr1000 or particle photon) 

I need to research more into sensors/ IFTTT triggers to see what kind of interaction I want. 
I guess I am wondering if you guys are against using IFTT since it might reduce some levels of complexity,
but there would still be a decent amount of coding on the side of the actual beanie baby.

-what if there is a way to have motors activate based on soundwaves- react to sound/music and move accordingly?
*** potential ideas updated 11/17 4:43pm ***

-animal tail and head are moving until it detects someone is nearby
- possibly reading for a change in passive soundwaves, and turning head that direction?
  having 2-4 audio sensors/microphone pointed in different directions, having head turn whichever way hears the most sound?
  http://www.instructables.com/id/Arduino-Frequency-Detection/
-using motors to have it wave when it detects motion? different responses

-having it use a pen or pencil and draw something on paper depending on some sort of motion? 
-drawing the sound waves it is recieving from a microphone?

*** potential ideas updated 11/19/ 4:55pm ***

facial recognition and tracking?
see example : http://www.instructables.com/id/Face-detection-and-tracking-with-Arduino-and-OpenC/
https://www.sparkfun.com/tutorials/304

*** potential ideas updated 11/19/ 11:15pm ***
  make a mini google maps car with autonomous driving and a camera using an rc car?
  

Include a discussion how it will be interactive or responsive to the environment.

## Component Parts

-Beanie baby -buy
  sewing material?
-some sort of internal frame to mount motors, lights, sensors -make this myself)
-servo motors - I have some
-Wifi enabled board - I have one
-motion sensor- for the sensors I am not sure what I want to use yet, I am just floating this concept by you guys
-noise sensor-
-light sensor-


Include what types of inputs/outputs/data it will use, and a block diagram showing how all those pieces are connected.
-


            input:                            controller:               output:
           IFTTT trigger
              or             ---------------Arduino MKR1000----------- motors, lights?, sounds?
         Some sort of sensor                 this is where             Motors will provide the most
         to interact with the                the code goes             visual reaction from within 
         environment                                                   a stuffed animal
         
         
         
         



## Challenges

I honestly think that there are two parts to this that will be the hardest:
1. Coming up with a trigger that will provide enough levels of complexity to remain interesting,
   especially at the interface show
   
2. Getting movement to work within the constraint of a beanie-baby or similar stuffed creature


## Timeline

What parts of the project do you anticipate you will complete in each of the next 5 weeks? Your goal is to solve the scary problems as quickly as possible! 

- Week 1: Write proposal
- Week 2: Figuure out trigger, order parts
- Week 3: figure out code, debug, test on parts
- Week 4: begin assembly of final thing
- Week 5: Present!

## References and link

this is a living section- will be evolving as my research moves forward
