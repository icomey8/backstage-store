const NavbarTitle = () => {
	return (
		<>
			<div className="flex items-center gap-2">
				<div className="flex items-center gap-2 m-2 ml-4">
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
						className="lucide lucide-theater"
					>
						<path d="M2 10s3-3 3-8" />
						<path d="M22 10s-3-3-3-8" />
						<path d="M10 2c0 4.4-3.6 8-8 8" />
						<path d="M14 2c0 4.4 3.6 8 8 8" />
						<path d="M2 10s2 2 2 5" />
						<path d="M22 10s-2 2-2 5" />
						<path d="M8 15h8" />
						<path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
						<path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
					</svg>
					<h1 className="font-sans text-2xl font-bold text-[#EEEEF0]">backstage</h1>
				</div>
				<div>
					<div className="text-xs rounded-full bg-[#352914] p-1 px-3">
						<p className="text-[#FFBC42]">v1.0.0</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTitle;
