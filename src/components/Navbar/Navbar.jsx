import { Router, Route, Link } from "wouter";
import Home from "../Home/Home.jsx";

const Navbar = () => {
	return (
		<>
                <nav className="flex p-4 text-white bg-gray-900 border-b border-gray-800">
                    <div className="flex gap-2 m-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
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
                        <h1>backstage</h1>
                    </div>
                    <div className="flex items-center gap-20 ml-auto">
                        <div className="flex items-center gap-3 border-r-2 pr-7">
                            <Link href="/">Home</Link>
                            <Link href="/listings">Listings</Link>
                        </div>
                        <h1>Dark/Light</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shopping-cart"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                    </div>
                </nav>
		</>
	);
};

export default Navbar;
