import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import useRWD from "../useRWD";

const NavBar = ({ barStatus, children, className }) => {
	const bar = useRef();
	const barBody = useRef();
	const device = useRWD();

	useEffect(() => {
		let isCancelled = false;
		const tl = gsap.timeline();
		if (barStatus) {
			tl.fromTo(
				bar.current,
				{ width: 0, display: "block" },
				{ duration: 0.4, width: 256 }
			).fromTo(
				barBody.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.1 }
			);
		} else {
			tl.fromTo(
				barBody.current,
				{ opacity: 1 },
				{ opacity: 0, duration: 0.2 }
			).to(bar.current, {
				width: 0,
				duration: 0.5,
				onComplete: () => {
					if (!isCancelled) {
						gsap.set(bar.current, { display: "none" });
					}
				},
			});
		}

		return () => {
			isCancelled = true;
			gsap.killTweensOf([barBody.current, bar.current]);
		};
	}, [barStatus]);

	return (
		<>
			{device >= 1024 ? (
				<div
					ref={bar}
					className={
						className +
						" whitespace-nowrap shadow-lg h-full overflow-hidden hidden max-lg:hidden"
					}
				>
					<div ref={barBody} className="px-2">
						{children}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default NavBar;
