import "./dateDisplay.css";
const DateDisplay = ({ date, year, month, changeMonth }) => {
	const changeDate = (e) => {
		let currentDate = e.target.value.split("-");
		console.log(currentDate[0], currentDate[1]);
		changeMonth(parseInt(currentDate[0]), parseInt(currentDate[1]));
	};

	return (
		<>
			<label htmlFor="dateSelect" className="font-semibold text-lg">
				{date && (
					<input
						className="p-2.5 rounded-lg dark:text-[#EFFFE9] dark:bg-[#011627] dark:fill-white"
						type="month"
						id="dateSelect"
						value={`${year}-${month < 10 ? "0" + month : month}`}
						onChange={changeDate}
					></input>
				)}
			</label>
		</>
	);
};

export default DateDisplay;
