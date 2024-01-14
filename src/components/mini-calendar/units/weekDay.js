import { useRef } from "react";

const WeekDay = ({year,month,setDate,nextMonth,prevMonth}) => {
	const dateInput = useRef();
	const clickDate = () => {
		dateInput.current.showPicker()
	}
	const dateLog = () => {
		if (month<10) {
			return year+"-0"+month;
		} else {
			return year+"-"+month;
		}
	}
	const changeInput = (e) => {
		setDate(
			e.target.value
		);
	}
    return (
        <>
            <div className="flex w-full justify-between">
                <button className="font-bold" onClick={clickDate}>
                <input ref={dateInput} type="month" className="hidden" onChange={changeInput} value={dateLog()}></input>
                    {year}年 {month}月
                    </button>
                <div className="flex gap-2">
                    <button onClick={prevMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                    </button>
                    <button onClick={nextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 w-full text-center text-sm text-gray-700">
                <div className="my-2">一</div>
                <div className="my-2">二</div>
                <div className="my-2">三</div>
                <div className="my-2">四</div>
                <div className="my-2">五</div>
                <div className="my-2">六</div>
                <div className="my-2">日</div>
            </div>
        </>
    )
}

export default WeekDay;