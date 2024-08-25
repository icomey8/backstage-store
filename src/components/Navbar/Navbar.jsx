import NavbarLinks from "./NavbarLinks.jsx";
import NavbarTitle from "./NavbarTitle.jsx";

const Navbar = () => {
	return (
		<>
			<nav className="flex p-4 bg-[#1C1C1C] border-b border-[#3E3F45]">
				<NavbarTitle />
				<NavbarLinks />
			</nav>
		</>
	);
};

export default Navbar;
