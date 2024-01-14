import randomCode from "@/components/utils/random";
import { useState } from "react";

const CheckBox = ({ children, name }) => {
	const [code, setCode] = useState(randomCode());
	return (
		<div>
			<input
				name={name}
				id={code}
				type="checkbox"
				className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-md"
			></input>
			<label htmlFor={code} className="max-lg:text-xs">{children}</label>
		</div>
	)
};

export default CheckBox;
