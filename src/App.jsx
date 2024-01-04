// react imports
import { useEffect, useState } from "react";

// components
import NewList from "./components/NewList";
import TechList from "./components/TechList";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList";

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [isMediumScreen, setIsMediumScreen] = useState(
		window.innerWidth <= 768
	);

	const toggleMenu = () => {
		setShowMenu((prevValue) => !prevValue);
	};

	// const openMenu = () => {
	// 	setShowMenu(true);
	// };

	// const closeMenu = () => {
	// 	setShowMenu(false);
	// };

	useEffect(() => {
		const handleResize = () => {
			setIsMediumScreen(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<main className="grid h-screen grid-cols-1 font-inter place-items-center bg-neutral-offWhite">
			<section className="pt-6 px-4 w-[385px] md:w-[1200px]">
				<div className="flex items-center justify-between md:w-[1200px] md:flex md:items-baseline">
					<img src="/images/logo.svg" alt="logo" className="h-8" />
					{isMediumScreen ? (
						<button type="button" onClick={toggleMenu} className="md:hidden">
							{showMenu ? (
								<img src="/images/icon-menu-close.svg" alt="" />
							) : (
								<img src="/images/icon-menu.svg" alt="" />
							)}
						</button>
					) : (
						<div className="hidden md:block md:mr-8">
							<MenuList />
						</div>
					)}
					{isMediumScreen && showMenu && (
						<div className="absolute top-20 right-0 w-[300px] h-[100vh] bg-neutral-offWhite z-10">
							<MenuList />
						</div>
					)}
				</div>
				<div className="md:grid md:gap-4 ">
					<div className="">
						<img
							src="/images/image-web-3-mobile.jpg"
							alt=""
							className="block py-8 md:hidden"
						/>
						<img
							src="/images/image-web-3-desktop.jpg"
							alt=""
							className="hidden py-8 md:block md:col-span-1 md:h-[390px]"
						/>
					</div>
					<div className="md:row-start-2 md:mt-[-130px] md:gap-4 md:row-end-2 md:grid-cols-2 md:grid">
						<h1 className="text-[40px] md:text-[60px] md:row-start-1 md:row-end-2 leading-10 md:leading-[3.5rem] w-[90%] font-extrabold">
							The Bright Future of Web 3.0?
						</h1>
						<div>
							<p className="py-4 text-neutral-darkGrayishBlue text-[15px] md:w-[80%]">
								We dive into the next evolution of the web that claims to put
								the power of the platforms back into the hands of the people.
								But is it really fulfilling its promise?
							</p>
							<button
								type="button"
								className="bg-primary-softRed hover:bg-black text-[15px] text-white py-3 px-10 tracking-[0.2rem] font-bold uppercase"
							>
								Read more
							</button>
						</div>
					</div>
					<div className="mt-14 md:mt-8 md:max-w-min bg-neutral-veryDarkBlue md:col-start-2 md:col-end-3">
						<h2 className="pt-5 pl-5 text-3xl font-bold text-primary-softOrange">
							New
						</h2>
						<div>
							<NewList />
						</div>
					</div>
				</div>
				<ul className="pt-20 pb-10 md:flex">
					<TechList />
				</ul>
			</section>
			<Footer />
		</main>
	);
}

export default App;
