import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";

const Home = () => {


	return (
		<>
			<Navbar />
			<div className="flex flex-col flex-1 items-center justify-center w-screen font-sans bg-[#1C1C1C] gap-6">
				<h1 className="font-sans text-6xl font-bold text-[#EEEEF0]">
					A <span className="text-[#FFC451]">better</span> way to support your favorite artists.
				</h1>
				<h2 className="font-sans text-lg font-medium text-[#B2B4BD]">
				Official, expanded versions of your favorite albums.  Sign up
				now to get access to never before seen or listened content.
				</h2>
				<button className="text-black bg-[#FFBC42] hover:bg-[#F4B234] p-3 px-6 rounded-3xl text-md font-sm">Get Started</button>
			</div>
		</>
	);
};

export default Home;
