import generateCalendar from "@/components/calenderSpawn";
import Cell from "./cell";
import { v4 } from "uuid";
import { useEffect } from "react";
const Table = ({ dateDetails, year, month,selectDay,setSelectDay,openForm }) => {
	return (
		<div className="grid grid-cols-7">
			{generateCalendar(year, month).map((value) => {
				return value.map((value) => {
					return (
						<Cell
							key={v4()}
							year={year}
							month={month}
							day={value}
							isToday={
								dateDetails.year === year &
								dateDetails.month === month &
								dateDetails.date === value
									? true: false
							}
                            isSelect={
                                selectDay===year + "-" + month + "-" + value?true:false
                            }
                            setSelectDay={setSelectDay}
							openForm={openForm}
						>
							{value}
						</Cell>
					);
				});
			})}
		</div>
	);
};

export default Table;
