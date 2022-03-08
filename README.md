# Robot arm

When I first heard about Raspberry Pi, I thought 'Is it possible to control it with code written in Javascript? It turned out it is, so I decided to make first preparations to create a robot arm: writing some test code that would be used in a real device in the future.<br><br>
The idea is simple: I wanted to create a robot arm made up of two parts of equal length (to make calculations simpler; with two equal length arms we have kind of isosceles triangle), and arm's purpose was to be able to move its ending only on Y axis and not to move it on X axis. This requires the angles in triangle to be calculated in "real time" (every time a user changes the HTML range element). I don't know much about trygonometry, but The University of Wikipedia was here to help ;).

<strong>demo:</strong> https://stronyireszta.pl/portfolio/robot-arm/
