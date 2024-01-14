import Options from "../options";
import FunctionBlock from "./function";
import DateDisplay from "./units/dateDisplay";

const CalendarHeader = ({date,nextMonth,prevMonth,year,month,changeMonth}) => {
    return (
        <div className="px-5 py-3 flex justify-between">
            <DateDisplay date={date} year={year} month={month} changeMonth={changeMonth}></DateDisplay>
            <div className="flex gap-2 items-center">
                <Options></Options>
                <FunctionBlock nextMonth={nextMonth} prevMonth={prevMonth}></FunctionBlock>
            </div>
        </div>
    )
}

export default CalendarHeader;