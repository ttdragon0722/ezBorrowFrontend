import React, { useRef } from "react";
import useRWD from "../useRWD";

const Header = ({
	leftSideBarSwitch,
	setDate,
	year,
	month,
	setToday,
	prevMonth,
	nextMonth,
}) => {
	const device = useRWD();
	const showLeftSideBar = () => {
		leftSideBarSwitch((prev) => {
			console.log(prev);
			return !prev;
		});
	};

	const dateInput = useRef();
	const clickDate = () => {
		dateInput.current.showPicker();
	};
	const dateLog = () => {
		if (month < 10) {
			return year + "-0" + month;
		} else {
			return year + "-" + month;
		}
	};
	const changeInput = (e) => {
		setDate(e.target.value);
	};

	return (
		<header className="bg-white shadow-lg h-[--header-height]">
			<nav
				className="mx-auto flex items-center justify-between py-5 px-8 max-lg:px-3"
				aria-label="Global"
			>
				{device >= 1024 && (
					<div className="flex gap-5 ">
						<button
							type="button"
							onClick={showLeftSideBar}
							className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 focus:bg-slate-500/15"
						>
							<span className="sr-only">側選單</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
						<div className="font-bold mr-5"># 場地租借</div>
					</div>
				)}
				<div className="flex items-center gap-2">
					<div className="flex gap-2 font-bold">
						<button onClick={prevMonth}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5 8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						<button onClick={nextMonth}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
					<div className="font-extrabold text-xl max-lg:text-sm tracking-wide">
						<button onClick={clickDate}>
							<input
								ref={dateInput}
								type="month"
								className="hidden"
								onChange={changeInput}
								value={dateLog()}
							></input>
							{year}年 {month}月
						</button>
					</div>
					<div>
						<button
							onClick={setToday}
							className="bg-transparent max-lg:text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2.5 border border-blue-500 hover:border-transparent rounded"
						>
							今天
						</button>
					</div>
					{device > 425 && (
						<>
							<div>
								<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1 px-2.5">
									<option disabled>選擇場地</option>
									<option select="true">全部場地</option>
								</select>
							</div>
							<div>
								<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1 px-2.5">
									<option disabled>選擇學會</option>
									<option select="true">全部科系</option>
								</select>
							</div>
						</>
					)}
				</div>
				{device >= 1024 && (
					<div className="flex flex-1 justify-end">
						<a
							href="/login"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
