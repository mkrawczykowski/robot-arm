$( document ).ready(function() {

   /*
   //https://gist.github.com/conorbuck/2606166

   var p1 = {
	x: 0,
	y: 0
};

var p2 = {
	x: 0,
	y: 8
};

// angle in radians
var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);

// angle in degrees
var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

console.log(angleDeg);

*/


   /*
   const a = 6;
   const b = 5;

degrees = Math.atan(a/b) * 180 / Math.PI;

    console.log(degrees);
    */
//https://gist.github.com/Samueleroux/f6854e8e443a210ff6958b23f2237097

/*
   var p1={
	x:0,
	y:0
};

var p2={
	x:0,
	y:1
};

var p3={
	x:1,
	y:1	
};
*/
/*
var p1={
	x:9,
	y:5
};

var p2={
	x:3,
	y:5
};

var p3={
	x:9,
	y:8
};

var p12 = Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2));
var p13 = Math.sqrt(Math.pow((p1.x - p3.x),2) + Math.pow((p1.y - p3.y),2));
var p23 = Math.sqrt(Math.pow((p2.x - p3.x),2) + Math.pow((p2.y - p3.y),2));

//angle in radians
var resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));

//angle in degrees
var resultDegree = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;

console.log(resultRadian);
console.log(resultDegree);
*/




















/*
// DZIAŁAJĄCY SKRYPT LICZĄCY KONTY MIĘDZY TRZEMA PUNKTAMI
//https://stackoverflow.com/questions/36334996/determine-angle-between-3-coordinates
A = { x: 0, y: 8 };
B = { x: 0, y: 0 };
C = { x: 9, y: 0 };

console.log(find_angle(A,B,C));

function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    
    return Math.acos((BC*BC+AB*AB-AC*AC) / (2*BC*AB)) * (180 / Math.PI);   
}


// Zrób z funkcji poniżej obiekt ==============================================================================================



function policzKaty(){
   function radians_to_degrees(radians)
   {
   var pi = Math.PI;
   return radians * (180/pi);
   }

   function degrees_to_radians(degrees)
   {
   var pi = Math.PI;
   return degrees * (pi/180);
   }

   const PR = {x: 0, y: 0};
   const KR = {x: 8, y: 8};
   const POM = {
      x: (PR.x + KR.x)/2,
      y: (PR.y + KR.y)/2,
   }
   let PRSR = 6;
   let KRSR = 6;

   let PRZ = POM.x;
   let ZPOM = POM.y;

   let PRPOM = Math.sqrt((PRZ*PRZ)+(ZPOM*ZPOM));

   let PRKR = 2*PRPOM;
   let pom1 = KRSR*KRSR + PRKR*PRKR - PRSR*PRSR
   let pom2 = 2*KRSR*PRKR;

   let K3 = radians_to_degrees(Math.acos(pom1/pom2));
   let K2 = 180-(2*K3);
   console.log('K2: ' + K2);

   let sinK11 = Math.sin(ZPOM/PRPOM);
   let K11 = Math.asin(sinK11) * 180/Math.PI;

   let K1 = K11 + K3;

   let K22 = (90-K1);
   let SRZ2 = PRSR*Math.sin(degrees_to_radians(K1))/Math.sin(degrees_to_radians(90));
   let PRZ2 = PRSR*Math.sin(degrees_to_radians(K22))/Math.sin(degrees_to_radians(90)); 
}

policzKaty();

*/

const slider = $('#slider');

const zmienne = {
   PR: { //podstawa ramienia, zawsze 0,0
      x: 0, y: 0
   },
   KR: {}
}

function policzKaty(KRx, KRy){
   zmienne.KR.x = KRx;
   zmienne.KR.y = KRy;
   function radians_to_degrees(radians){
      var pi = Math.PI;
      return radians * (180/pi);
   };

   function degrees_to_radians(degrees){
      var pi = Math.PI;
      return degrees * (pi/180);
   };

   zmienne.POM ={
      x: (zmienne.PR.x + zmienne.KR.x)/2,
      y: (zmienne.PR.y + zmienne.KR.y)/2,
   };
   zmienne.PRSR = 6;
   zmienne.KRSR = 6;

   zmienne.PRZ = zmienne.POM.x;
   zmienne.ZPOM = zmienne.POM.y;

   zmienne.PRPOM = Math.sqrt((zmienne.PRZ*zmienne.PRZ)+(zmienne.ZPOM*zmienne.ZPOM));

   zmienne.PRKR = 2*zmienne.PRPOM;
   zmienne.pom1 = zmienne.KRSR*zmienne.KRSR + zmienne.PRKR*zmienne.PRKR - zmienne.PRSR*zmienne.PRSR;
   zmienne.pom2 = 2*zmienne.KRSR*zmienne.PRKR;

   zmienne.K3 = radians_to_degrees(Math.acos(zmienne.pom1/zmienne.pom2));
   zmienne.K2 = 180-(2*zmienne.K3);

   zmienne.sinK11 = Math.sin(zmienne.ZPOM/zmienne.PRPOM);
   zmienne.K11 = Math.asin(zmienne.sinK11) * 180/Math.PI;

   zmienne.K1 = zmienne.K11 + zmienne.K3;

   zmienne.K22 = (90-zmienne.K1);
   zmienne.SRZ2 = zmienne.PRSR*Math.sin(degrees_to_radians(zmienne.K1))/Math.sin(degrees_to_radians(90));
   zmienne.PRZ2 = zmienne.PRSR*Math.sin(degrees_to_radians(zmienne.K22))/Math.sin(degrees_to_radians(90));
   console.log('policzyłam!');

   zmienne.minusRamie1kat = zmienne.K1 - (zmienne.K1 * 2);
   zmienne.minusRamie2kat = 180 - zmienne.K2;

   zmienne.rotateK1Zmienna = 'rotate(' + zmienne.minusRamie1kat + 'deg)';
   zmienne.rotateK2Zmienna = 'rotate(' + zmienne.minusRamie2kat + 'deg)';
}

policzKaty(8, 0);
$('#ramieJeden').css('transform', zmienne.rotateK1Zmienna);
$('#ramieDwa').css('transform', zmienne.rotateK2Zmienna);

 var slide = document.getElementById('slider');
 slide.onchange = function() {
   let slajderVal = this.value;
       policzKaty(8, slajderVal);
      $('#ramieJeden').css('transform', zmienne.rotateK1Zmienna);
      $('#ramieDwa').css('transform', zmienne.rotateK2Zmienna);
      console.log(slajderVal);
 }

});


