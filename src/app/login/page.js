import Container from "@/components/container";

const Login = () => {
	return (
		<Container mode="mobile" className="h-max flex flex-col px-5 py-3 justify-center items-center gap-3">
			<div className="text-3xl font-bold text-center">管理者登入</div>
			<div>
				<input
					type="text"
					name="account"
					className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
					placeholder="帳號"
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
					placeholder="密碼"
				/>
			</div>
			<div className="text-center">
				<input
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded /"
					value="登入"
				/>
			</div>
		</Container>
	);
};

export default Login;
