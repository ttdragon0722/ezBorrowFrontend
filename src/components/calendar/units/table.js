import generateCalendar from "@/components/calenderSpawn";
import Cell from "./cell";
import { v4 } from "uuid";
import { useEffect, useState } from "react";

const Table = ({
	dateDetails,
	year,
	month,
	selectDay,
	setSelectDay,
	openForm
}) => {
	const [weekData, setWeekData] = useState([]);
	useEffect(() => {
		setWeekData(generateCalendar(year, month));
	}, [year, month]);

	return (
		<div
			className={`grid grid-cols-7 grid-rows-${weekData.length} w-full h-full overflow-y-scroll no-scrollbar`}
		>
			{weekData.map((value) => {
				return value.map((value) => {
					return (
						<Cell
						key={v4()}
						year={year}
							month={month}
							day={value}
							isToday={
								dateDetails.year === year &&
								dateDetails.month === month &&
								dateDetails.date === value
									? true
									: false
							}
							isSelect={
								selectDay === year + "-" + month + "-" + value
									? true
									: false
								}
								setSelectDay={setSelectDay}
								date={value}
								openForm={openForm}
						></Cell>
					);
				});
			})}
		</div>
	);
};

export default Table;
