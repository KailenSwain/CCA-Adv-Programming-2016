##What I learned how to do from this project:

Set up a raspberry pi

Use a raspberry pi (major pain to figure this out for the first time)

Set up processing on a raspberry pi

Install arduino and firmata on a raspberry pi for use in processing

Compare previous and current video frames in processing

Initialize webcam usage on a raspberry pi

How to Use firmata for I2C communication

How to use the adafruit motorshield for dc motors

How to use Michael and J.D. as resources

How to use an H-bridge in place of a shield

Using arduino without libraries sucks

How to get an arduino and Raspberry pi to communication through serial and firmata

I got a new appreciation for processing, which I really did not like before

I sorta learned how to use millis() instead of delay(THIS IS HUGE)

##Moving Forwards

I plan on getting comfortable with raspberry pi, and want to use it for projects. IF there is one thing that I got from this class, it is that I shouldn't think of projects in a sense of what can be accomplished with arduino, but rather keep and open mind for other methods of execution.

##Side note: 

I was one of three students out of our whole class who actually showed up to the Interface Show(?!)

##Code Here:



import processing.serial.*;
import cc.arduino.*;
Arduino arduino;

import processing.video.*;

Capture video;
PImage prev;

int rearIn1 = 7;
int rearIn2 = 12;
int enable1 = 6;

int steeringIn1 = 2;
int steeringIn2 = 4;
int enable2 = 3;

int num = 1;
int k=0; 
int p=2;

float threshold = 25;

float motionX = 0;
float motionY = 0;

float lerpX = 0;
float lerpY = 0;

long interval = 1000;
long previousMillis = 0;

int ledPin = 13;

void setup() {
  size(352, 288);
  String[] cameras = Capture.list();
  printArray(cameras);
  video = new Capture(this, 352, 288, 30);
  video.start();
  prev = createImage(352, 288, RGB);
  
  println(Arduino.list());
  arduino = new Arduino(this, Arduino.list()[0], 57600);
  arduino.pinMode(ledPin, Arduino.OUTPUT);
  
  arduino.pinMode(rearIn1, Arduino.OUTPUT);
  arduino.pinMode(rearIn2, Arduino.OUTPUT);
  arduino.pinMode(enable1, Arduino.OUTPUT);
  
  arduino.pinMode(steeringIn1, Arduino.OUTPUT);
  arduino.pinMode(steeringIn2, Arduino.OUTPUT);
  arduino.pinMode(enable2, Arduino.OUTPUT);
 
}





void captureEvent(Capture video) {
  if (prev != null) {
  prev.copy(video, 0, 0, video.width, video.height, 0, 0, prev.width, prev.height);
  prev.updatePixels();
  video.read();
}
}

void draw() {
  video.loadPixels();
  prev.loadPixels();
  image(video, 0, 0);
  


  //threshold = map(mouseX, 0, width, 0, 100);
  threshold = 50;


  int count = 0;
  
  float avgX = 0;
  float avgY = 0;

  loadPixels();
  // Begin loop to walk through every pixel
  for (int x = 0; x < video.width; x++ ) {
    for (int y = 0; y < video.height; y++ ) {
      int loc = x + y * video.width;
      // What is current color
      color currentColor = video.pixels[loc];
      float r1 = red(currentColor);
      float g1 = green(currentColor);
      float b1 = blue(currentColor);
      color prevColor = prev.pixels[loc];
      float r2 = red(prevColor);
      float g2 = green(prevColor);
      float b2 = blue(prevColor);

      float d = distSq(r1, g1, b1, r2, g2, b2); 

      if (d > threshold*threshold) {
        //stroke(255);
        //strokeWeight(1);
        //point(x, y);
        avgX += x;
        avgY += y;
        count++;
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();

  // We only consider the color found if its color distance is less than 10. 
  // This threshold of 10 is arbitrary and you can adjust this number depending on how accurate you require the tracking to be.
  if (count > 200) { 
    motionX = avgX / count;
    motionY = avgY / count;
    // Draw a circle at the tracked pixel
  }
  
  lerpX = lerp(lerpX, motionX, 0.1); 
  lerpY = lerp(lerpY, motionY, 0.1); 
  
  fill(255, 0, 255);
  strokeWeight(2.0);
  stroke(0);
  ellipse(lerpX, lerpY, 36, 36);

  //image(video, 0, 0, 100, 100);
  //image(prev, 100, 0, 100, 100);

  //println(mouseX, threshold);
  
  //begin motor control

if(lerpX >=234){
  k=0;
    if(num == 1){
      while(k<=200){
        //200 worked great
        //reverse
        arduino.analogWrite(enable2 , 255);
    
        arduino.digitalWrite(steeringIn1, arduino.HIGH);
        arduino.digitalWrite(steeringIn2, Arduino.LOW);
        println("test");
        k++;
    }
    arduino.digitalWrite(steeringIn1, arduino.LOW);
    arduino.digitalWrite(steeringIn2, Arduino.LOW);
    println("test concluded");
  } 
}

else if (lerpX >=117){
}
else if (lerpX <117){
      k=0;
      if(num == 1){
      while(k<=200){
        //200 worked great
        //reverse
        arduino.analogWrite(enable2 , 255);
    
        arduino.digitalWrite(steeringIn1, arduino.HIGH);
        arduino.digitalWrite(steeringIn2, Arduino.LOW);
        println("test");
        k++;
    }
    arduino.digitalWrite(steeringIn1, arduino.LOW);
    arduino.digitalWrite(steeringIn2, Arduino.LOW);
    println("test left");
  } 
  
}

}
  
  
  


float distSq(float x1, float y1, float z1, float x2, float y2, float z2) {
  float d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) +(z2-z1)*(z2-z1);
  return d;
}

##Happy holidays! See you guys next semester
