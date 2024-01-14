"use client";
import { useEffect, useState } from "react";
import CalendarHeader from "./calendar/header";
import WeekDays from "./calendar/month/weekDays";
import MonthTable from "./calendar/month/monthTable";

const Calendar = ({className,setScheduleDisplay}) => {
	const [date, setDate] = useState();
	const [currentYear, setCurrentYear] = useState(0);
	const [currentMonth, setCurrentMonth] = useState();

	// 取得日期
	useEffect(() => {
		const time = new Date();
		console.log(time.getFullYear());
		setCurrentYear(time.getFullYear());
		setCurrentMonth(time.getMonth() + 1);
		let timeDetails = {
			year: time.getFullYear(),
			month: time.getMonth() + 1,
			date: time.getDate(),
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds(),
		};
		console.log(timeDetails);
		setDate(timeDetails);
	}, []);

	// 月份操作
	const nextMonth = () => {
		setCurrentMonth((prev) => {
			return prev + 1;
		});
	};
	const prevMonth = () => {
		setCurrentMonth((prev) => {
			return prev - 1;
		});
	};

	const nextYear = () => {
		setCurrentYear((prev) => {
			return prev + 1;
		});
	};
	const prevYear = () => {
		setCurrentYear((prev) => {
			return prev - 1;
		});
	};
	useEffect(() => {
		if (currentMonth === 13) {
			setCurrentMonth(1);
			nextYear();
		} else if (currentMonth === 0) {
			setCurrentMonth(12);
			prevYear();
		}
	}, [currentMonth]);

	const changeMonth = (year,month) => {
		setCurrentYear(year);
		setCurrentMonth(month);
	}

	return (
		<div className={
			(className ? className+" ":"")+
			"relative right-0 w-[615px] max-lg:w-full aspect-square rounded-lg"}>
			<CalendarHeader
				date={date}
				year={currentYear}
				month={currentMonth}
				nextMonth={nextMonth}
				prevMonth={prevMonth}
				changeMonth={changeMonth}
			></CalendarHeader>
			<div className="flex flex-col w-full">
				<WeekDays></WeekDays>
				{date && (
					<MonthTable
						date={date}
						year={currentYear}
						month={currentMonth}
						setScheduleDisplay={setScheduleDisplay}
					></MonthTable>
				)}
			</div>
		</div>
	);
};

export default Calendar;
