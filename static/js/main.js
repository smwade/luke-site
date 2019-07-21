function getDaysSinceRef(refDate, curDate) {
	let dateDiff = curDate - refDate;
	return dateDiff / (1000 * 60 * 60 * 24)
}

const START_VAL = 10000;
const INFLATION_RATE = .025;
const INTERVAL = 365;
const refDate = new Date('2016-07-01T05:04:37.325Z');
const curDate = Date.now();
const numDaysSince = getDaysSinceRef(refDate, curDate);
const money =  START_VAL * Math.pow((1 + (INFLATION_RATE / INTERVAL)), (INTERVAL * Math.floor(numDaysSince/365)))

document.getElementById("amount").innerHTML = money.toFixed(2);

