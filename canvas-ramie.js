$( document ).ready(function() {

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


