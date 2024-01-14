"use client";

import { v4 } from "uuid";

const Options = () => {
	/**
	 * TODO GET 場地資料
	 */
	const spaces = [
		"1F B鏡",
		"1F C鏡",
		"3F會議室",
		"4A",
		"5A",
		"5F韻律教室",
		"6A",
		"6A-1",
	];
	return (
		<select className="
			dark:text-[#EFFFE9] dark:bg-[#011627] 
			border border-gray-300  text-sm rounded-lg block p-2.5 
			">
			<option>全部</option>
			{spaces.map((v) => {
				return (
					<option key={v4()} value={spaces}>
						{v}
					</option>
				);
				ㄌ;
			})}
		</select>
	);
};

export default Options;
