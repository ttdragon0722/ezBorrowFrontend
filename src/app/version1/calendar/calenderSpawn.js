const generateCalendar = (year, month) => {
	const currentDate = new Date(year, month - 1, 1); // 輸入時間
	const daysInMonth = new Date(year, month, 0).getDate(); // 總天數

	let calendar = [];
	let week = [];

	// 得到第一周的資訊
	for (let i = 0; i < currentDate.getDay(); i++) {
		week.push(null);
	}
	// 填充每天的日期
	for (let day = 1; day <= daysInMonth; day++) {
		week.push(day);
		if (week.length === 7) {
			calendar.push(week);
			week = [];
		}
	}
	// 補齊資料
	if (week.length > 0) {
		let prevLength = week.length;
		for (let i = 0; i < 7 - prevLength; i++) {
			week.push(null);
		}
		calendar.push(week);
	}

	// 格式化輸出
	// for (let i = 0; i < calendar.length; i++) {
	// 	for (let j = 0; j < calendar[i].length; j++) {
	// 		if (calendar[i][j] === null) {
	// 			process.stdout.write("   ");
	// 		} else {
	// 			process.stdout.write(
	// 				calendar[i][j].toString().padStart(2, " ") + " "
	// 			);
	// 		}
	// 	}
	// 	process.stdout.write("\n");
	// }

	return calendar;
}

export default generateCalendar;

// let calendar = generateCalendar(2023, 12);
// console.log(calendar);
