import { useEffect, useRef, useState } from "react";
import Header from "./units/header";
import Table from "./units/table";
import useTouchDirectionListener, { EventUtil } from "../useScroll";

const Calendar = ({
	dateDetails,
	year,
	month,
	selectDay,
	setSelectDay,
	prevMonth,
	nextMonth,
	openForm
}) => {
	const calendarRef = useRef();
	useEffect(() => {
		const handleScroll = EventUtil.listenTouchDirection(
			calendarRef.current,
			true,
			() => {},
			() => {prevMonth()},
			() => {},
			() => {nextMonth()}
		);
		return () => {
			handleScroll()
		}
	},[]);

	return (
		<div ref={calendarRef} className="w-full h-full flex flex-col">
			<Header></Header>
			<Table
				dateDetails={dateDetails}
				year={year}
				month={month}
				selectDay={selectDay}
				setSelectDay={setSelectDay}
				openForm = {openForm}
			></Table>
		</div>
	);
};

export default Calendar;
