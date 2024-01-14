const Cell = ({ children, year, month, day, isToday ,isSelect,setSelectDay,openForm }) => {
	const changeSelect = (e) => {
		setSelectDay(e.target.getAttribute("data-cell-time"));
	};
	const handleDbClick = (e) => {
		setSelectDay(e.target.getAttribute("data-cell-time"));
		openForm();
	}

	return (
		<>
			{day? (
				<div
					className={
						"my-1.5 cursor-pointer rounded-full hover:bg-gray-300 " +
						(isToday ? "bg-sky-600 text-white " : "")+
                        (!isToday && isSelect?"bg-gray-400 text-white":"")
					}
					onClick={changeSelect}
					data-cell-time={year + "-" + month + "-" + day}
					onDoubleClick={handleDbClick}
				>
					{children}
				</div>
			):(<div></div>)}
		</>
	);
};

export default Cell;
