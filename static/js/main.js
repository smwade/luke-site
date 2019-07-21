function getNumSecondsSince(startDate, curDate) {
	let dateDiff = curDate - startDate;
	return dateDiff / (1000)
}

const START_VAL = 10000;
const INFLATION_RATE_PER_YEAR = .025;
const INFLATION_RATE_PER_SEC = INFLATION_RATE_PER_YEAR / (365*24*60*60);
const REF_DATE = new Date('2016-07-01T05:04:37.325Z');

function refreshAmount() {
	const curDate = Date.now();
	const numSecondsSince = getNumSecondsSince(REF_DATE, curDate);
	const money =  START_VAL * Math.pow(Math.E, INFLATION_RATE_PER_SEC * numSecondsSince)
	document.getElementById("amount").innerHTML = money.toFixed(2);
}

console.log("<3 <3 Luke")
refreshAmount();
window.setInterval(refreshAmount, 1000);

