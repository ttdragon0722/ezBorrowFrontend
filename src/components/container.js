const Container = ({ children, style, className, mode }) => {
	return (
		<div
			className={
				`m-auto relative 
				${mode==="mobile"?"w-mobile-sm":"lg:w-pc"} 
				${className ? className : ""} 
				`}
			style={style}
		>
			{children}
		</div>
	);
};
export default Container;
