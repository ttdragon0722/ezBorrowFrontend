// Home page
import Container from "@/components/container";
import RootLayout from "./layout";
import Body from "./body";

const Home = () => {

	return (
		<RootLayout>
			<Container>
				<div className="flex flex-col items-center w-full">
					<h1 className="text-3xl font-bold my-5">
						# 學校場地租借系統
					</h1>
					{/* <div className="px-2">
						<Options></Options>
					</div> */}
					<Body></Body>
				</div>
			</Container>
		</RootLayout>
	);
};

export default Home;
