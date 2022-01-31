function setup(){
	
	//initialize clock
	clock();
	
	//update clock every second!
	var inc = 1000;
	setInterval(clock, inc);
	
	//initialize weekday
	wochentag();
}

/*src: https://codepen.io/dope/pen/KJYMZz*/
function clock() {
  const date = new Date();

  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector('.second').style.transform = `rotate(${second}deg)`;
  
  if(seconds<10){
	  seconds = '0' + seconds;
  }
  
    if(minutes<10){
	  minutes = '0' + minutes;
  }
  
  document.querySelector('.clock_label').innerHTML = 'Es ist '+hours+':'+minutes+':'+seconds+' Uhr.';
}


function wochentag() {
	const date = new Date();
	const wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
	let day = date.getDay();
	
	document.querySelector('.week_label').innerHTML = 'An einem ' + wochentag[day]+'.';
}
