const alarm = new Audio('alarm.wav');
const params = new URLSearchParams(window.location.search).entries();
let timerSec; 
const screenNum = document.querySelector("h1");
(function() {
	for (const [key, value] of params) {
		if (key == 't') {
			setTimer(value);
			return;
		}
	}
	setTimer(60);
})();

function setTimer(n) {
	const timeGroupsRegex = /((?<h>\d*)h)?((?<m>\d*)m)?((?<s>\d*)s?)?/;
	const timeGroups = timeGroupsRegex.exec(n).groups;
	timerSec =
	(typeof timeGroups['h'] != "undefined" ? +timeGroups['h'] * 3600 : 0) +
	(typeof timeGroups['m'] != "undefined" ? +timeGroups['m'] * 60 : 0) +
	(typeof timeGroups['s'] != "undefined" ? +timeGroups['s'] : 0);
}

function advanceTimer() {
	if (timerSec == null) return;
	timerSec--;
	updateDisplay();
	if (timerSec == 0) playAlarm();
}

function updateDisplay() {

	let displayTime = Math.abs(timerSec);

	let h = Math.floor(displayTime / 3600) % 24;
	let m = Math.floor(displayTime / 60)   % 60;
	let s =            displayTime         % 60;
	h = ("0" + h).slice(-2);
	m = ("0" + m).slice(-2);
	s = ("0" + s).slice(-2);
	let displayText = `${h}:${m}:${s}`;
	screenNum.innerText = displayText;
	document.title = displayText;
	document.body.className = timerSec < 0 ? "done" : "";
}

function playAlarm() {
	alarm.play();
}

updateDisplay();

setInterval(() => {
	advanceTimer();
}, 1000);
