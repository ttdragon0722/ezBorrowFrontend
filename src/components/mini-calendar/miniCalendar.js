import Table from "./units/table";
import WeekDay from "./units/weekDay";

const MiniCalendar = ({dateDetails,year,month,selectDay,setSelectDay,setMonthYear,nextMonth,prevMonth,openForm}) => {
    return (
        <div className="flex flex-col p-5">
            <WeekDay year={year} month={month} setDate={setMonthYear} nextMonth={nextMonth} prevMonth={prevMonth}></WeekDay>
            <Table 
                dateDetails = {dateDetails}
                year={year} month={month} 
                selectDay={selectDay} setSelectDay={setSelectDay}
                openForm={openForm}
                ></Table>
        </div>
    )
}

export default MiniCalendar;