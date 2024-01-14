import "./cell.css"
const Cell = ({ children, className, year, month, day,today,setScheduleDisplay }) => {
	const click = () => {
		console.log(year + "-" + month + "-" + day);
        setScheduleDisplay(year,month,day);
	};

	return (
		<div
			className={"aspect-square pr-2 pb-2 pt-0.5 pl-1 border-x border-t-2 border-b hover:bg-slate-500/15 dark:hover:bg-gray-700" + 
                (className ? " " + className : "") +
                (day? " cursor-pointer":"")+
                (today? " today":" border-[#e5e7eb] ")
            }
			onClick={day ? click : null}
		>
			{children}
		</div>
	);
};

export default Cell;
