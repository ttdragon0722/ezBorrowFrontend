const generateCalendar = (year, month,offset=1) => {
	const currentDate = new Date(year, month - 1, 1); // 輸入時間
	const daysInMonth = new Date(year, month, 0).getDate(); // 總天數
	let calendar = [];
	let week = [];
	// 得到第一周的資訊
	if (currentDate.getDay()-offset >= 0) {
		for (let i = 0; i < currentDate.getDay()-offset; i++) {
			week.push(null);
		}
	} else {
		for (let i = 0; i < 7+currentDate.getDay()-offset; i++) {
			week.push(null);
		}
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
	return calendar;
}

export default generateCalendar;
