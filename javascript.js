function getWeekOfMonth(date) {
	let y = date.getFullYear() 
	let m = date.getMonth();
	var firstDay = new Date(y, m, 1);
	var lastDay = new Date(y, m + 1, 0);
	var weekNo = 0;

	var week1 = []
	for (let index = 0; index < 7 - firstDay.getDay(); index++) {
		week1.push(index+1)
		if(date.getDate() == index+1){
			weekNo = 1
		}
	}
	var week2 = []
	for (let index = week1[week1.length -1 ]; index < 14 - firstDay.getDay(); index++) {
		week2.push(index+1)
		if(date.getDate() == index+1){
			weekNo = 2
		}
	}
	var week3 = []
	for (let index = week2[week2.length -1 ]; index < 21 - firstDay.getDay(); index++) {
		week3.push(index+1)
		if(date.getDate() == index+1){
			weekNo = 3
		}
	}
	var week4 = []
	for (let index = week3[week3.length -1 ]; index < 28 - firstDay.getDay(); index++) {
		week4.push(index+1)
		if(date.getDate() == index+1){
			weekNo = 4
		}
	}
	var week5 = []
	for (let index = week4[week4.length -1 ]; index < 35 - firstDay.getDay(); index++) {
		
		if(index+1 <= lastDay.getDate()){
			week5.push(index+1)
		}
		if(date.getDate() == index+1){
			weekNo = 5
		}
		if(weekNo == 5 && week5[week5.length -1] == lastDay.getDate()){
			weekNo = -1
		}
	}
	var week6 = []
	for (let index = week5[week5.length -1 ]; index < 42 - firstDay.getDay(); index++) {
		
		if(index+1 <= lastDay.getDate()){
			week6.push(index+1)
			if(date.getDate() == index+1){
				weekNo = -1
			}
		}
	}

	let today_date = date.getDay()
	if(today_date < firstDay.getDay()){
		weekNo = parseInt(weekNo) - 1
	}
	if(weekNo < -1){weekNo = -1}
	return weekNo
}