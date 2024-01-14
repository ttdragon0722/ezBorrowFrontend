const Cell = ({
	children,
	className,
	year,
	month,
	day,
	isToday,
	isSelect,
	setSelectDay,
	date,
	openForm
}) => {
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
					data-cell-time={year + "-" + month + "-" + day}
					className={
						"border p-1 relative pt-5 pb-1 " +
						(date ? "cursor-pointer" : "")
					}
					onClick={changeSelect}
					onDoubleClick={handleDbClick}
				>
					<span
						className={
							"absolute top-1 rounded-full w-5 h-5 flex justify-center items-center text-xs sm:text-md " +
							(isToday ? "bg-sky-600 text-white" : "") +
							(isSelect && !isToday ? "bg-gray-600 text-white" : "")
						}
					>
						{date}
					</span>
					<div className="px-1">{children}</div>
				</div>
			):(<div className="border"></div>)}
		</>
	);
};

export default Cell;
