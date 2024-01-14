import { v4 } from "uuid";
import generateCalendar from "../calenderSpawn";
import Cell from "./cell";

const MonthTable = ({date, year, month,setScheduleDisplay }) => {
	return (
		<div className="grid grid-cols-7">
			{generateCalendar(year, month).map((value) => {
				return value.map((value) => {
					return (
						<Cell
							key={v4()}
                            year={year} month={month} day={value}
                            today={
                                (date.year===year && date.month ===month && date.date === value)?true:false
                            }
                            setScheduleDisplay={setScheduleDisplay}
						>
							{value}
						</Cell>
					);
				});
			})}
		</div>
	);
};

export default MonthTable;
