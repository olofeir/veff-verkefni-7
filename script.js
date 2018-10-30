const GAMES_TO_PLAY = 10;


function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
  var start = true;
  while (start){
    play();
    start = confirm("Má bjóða þér að spila aftur?");
  }
}

function play() {
  var rett = 0;
  var timi = Date.now();
  const haetta = false;
  for(var i = 0; i < GAMES_TO_PLAY; i++){
    var svar = ask();
      if(svar === null){
        alert("Hætt í leik.")
        return;
      }
      if(svar){
        rett++;
      }
    }
    skilabod(timi, rett, haetta);
}

function skilabod (timi, rett, haetta) {
  if (haetta) {
    alert(`Hætt í leik`);
  } else {
    var lokatimi = Date.now();
    var medaltal = (lokatimi-timi)/1000;

    alert("Þú svaraðir " + rett + " af " + GAMES_TO_PLAY + " dæmum rétt á "+ medaltal.toFixed(2) + "sekúndum. \n Meðalrétt svör á sekúndu eru " + (rett/medaltal).toFixed(2));
    }
}

function ask() {
  var spurning = daemi(['+', '-', '*', '/']);
  var svar = prompt(spurning[1]);
  if(svar === null){
    return null;
  }
  return spurning[0] == svar;
}

function daemi(random){

  switch(random[Math.floor(Math.random()*4)]){
    case '+':
      var fyrri = randomNumber(1,100);
      var seinni = randomNumber(1,100);
      var svar = fyrri + seinni;
      var spurning = fyrri + " + " + seinni ;
      break;

    case '-':
      var fyrri = randomNumber(1,100);
      var seinni = randomNumber(1,100);
      var svar = fyrri - seinni;
      var daemi = fyrri + " - " + seinni;
      break;

    case '*':
      var fyrri = randomNumber(1,10);
      var seinni = randomNumber(1,10);
      var svar = fyrri * seinni;
      var daemi = fyrri + " * " + seinni;
      break;

    case '/':
      var fyrri = randomNumber(2,10);
      var seinni = randomNumber(2,10)*fyrri;
      var svar = seinni / fyrri;
      var daemi = seinni + " / " + fyrri;
      break;
  }
  return [svar, daemi];
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();
