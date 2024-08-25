import { Link } from "wouter";

const NavbarLinks = () => {
	return (
		<>
			<div className="flex items-center ml-auto mr-4">
				<div className="flex items-center gap-4 font-sans font-medium border-r-2 border-[#4A4B53] pr-5">
					<Link className="text-[#EEEEF0] hover:text-[#FFBC42]" href="/">home</Link>
					<Link className="text-[#EEEEF0] hover:text-[#FFBC42]" href="/listings">catalog</Link>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#EEEEF0"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="ml-5 lucide lucide-shopping-cart"
				>
					<circle cx="8" cy="21" r="1" />
					<circle cx="19" cy="21" r="1" />
					<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
				</svg>
			</div>
		</>
	);
};

export default NavbarLinks;
