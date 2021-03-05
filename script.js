document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

btnTop = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.bottom = "4.4rem";
        btnTop.style.opacity = "1";
    } else {
        btnTop.style.bottom = "-3.2rem";
        btnTop.style.opacity = "0";
    }
}

function openMenu() {
    document.getElementById("summaryDiv").style.right = "0";
    document.getElementById("summaryDiv").style.opacity = "0.5";
    document.getElementById("btnMenu").style.transform = "rotate(0deg)";
    document.getElementById("btnMenu").setAttribute("onclick", "closeMenu()");
    document.getElementById("summaryDiv").setAttribute("onmouseover", "document.getElementById('summaryDiv').style.opacity = '1'");
    document.getElementById("summaryDiv").setAttribute("onmouseout", "document.getElementById('summaryDiv').style.opacity = '0.5'");
}

function closeMenu() {
    document.getElementById("summaryDiv").style.right = "-12rem";
    document.getElementById("summaryDiv").style.opacity = "0";
    document.getElementById("btnMenu").style.transform = "rotate(180deg)";
    document.getElementById("btnMenu").setAttribute("onclick", "openMenu()");
}

//TDF Countdown

var countDownDateTDF = new Date("Jun 26, 2021 12:15:00").getTime();

var xTDF = setInterval(function() {

  var nowTDF = new Date().getTime();

  var distanceTDF = countDownDateTDF - nowTDF;

  var daysTDF = Math.floor(distanceTDF / (1000 * 60 * 60 * 24));
  var hoursTDF = Math.floor((distanceTDF % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesTDF = Math.floor((distanceTDF % (1000 * 60 * 60)) / (1000 * 60));
  var secondsTDF = Math.floor((distanceTDF % (1000 * 60)) / 1000);

  document.getElementById("countdown-tdf").innerHTML = "D-" + daysTDF + " " + hoursTDF + ":"
  + minutesTDF + ":" + secondsTDF;

  if (distanceTDF < 0) {
    clearInterval(x);
    document.getElementById("countdown-tdf").innerHTML = "Started !";
  }
}, 1000);

//Giro Countdown

var countDownDateGiro = new Date("May 8, 2021 12:00:00").getTime();

var xGiro = setInterval(function() {

  var nowGiro = new Date().getTime();

  var distanceGiro = countDownDateGiro - nowGiro;

  var daysGiro = Math.floor(distanceGiro / (1000 * 60 * 60 * 24));
  var hoursGiro = Math.floor((distanceGiro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesGiro = Math.floor((distanceGiro % (1000 * 60 * 60)) / (1000 * 60));
  var secondsGiro = Math.floor((distanceGiro % (1000 * 60)) / 1000);

  document.getElementById("countdown-giro").innerHTML = "D-" + daysGiro + " " + hoursGiro + ":"
  + minutesGiro + ":" + secondsGiro;

  if (distanceGiro < 0) {
    clearInterval(x);
    document.getElementById("countdown-giro").innerHTML = "Started !";
  }
}, 1000);

//Vuelta Countdown

var countDownDateVuelta = new Date("Aug 14, 2021 13:10:00").getTime();

var xVuelta = setInterval(function() {

  var nowVuelta = new Date().getTime();

  var distanceVuelta = countDownDateVuelta - nowVuelta;

  var daysVuelta = Math.floor(distanceVuelta / (1000 * 60 * 60 * 24));
  var hoursVuelta = Math.floor((distanceVuelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesVuelta = Math.floor((distanceVuelta % (1000 * 60 * 60)) / (1000 * 60));
  var secondsVuelta = Math.floor((distanceVuelta % (1000 * 60)) / 1000);

  document.getElementById("countdown-vuelta").innerHTML = "D-" + daysVuelta + " " + hoursVuelta + ":"
  + minutesVuelta + ":" + secondsVuelta;

  if (distanceVuelta < 0) {
    clearInterval(x);
    document.getElementById("countdown-vuelta").innerHTML = "Started !";
  }
}, 1000);
