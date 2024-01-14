"use client"
import Calendar from "./calendar";
import Scheduling from "./scheduling";
import { useState } from "react";

const Body = () => {
    const [scheduleDisplay,setScheduleDisplay] = useState("尚未選擇");
    const scheduleShow = (year,month,day) => {
		setScheduleDisplay(year+"/"+month+"/"+day);
	}
	return (
		<div className="flex px-2 py-1 gap-1 justify-center w-full">
			<Calendar setScheduleDisplay={scheduleShow}></Calendar>
			<Scheduling scheduleDisplay={scheduleDisplay}></Scheduling>
		</div>
	);
};

export default Body;
