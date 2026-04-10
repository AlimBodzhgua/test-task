import { Briefcase, CircleUser, Code, House, Mail } from 'lucide-react';

export function Navbar() {
	return (
		<nav className='flex row justify-between items-center bg-gray-950 fixed top-0 left-0 right-0 z-50 rounded-4xl px-7 py-5 mt-8 max-w-[620px] mx-auto'>
			<div>
				<h1 className='text-white font-bold text-xl'>AB.</h1>
			</div>
			<div className='flex justify-between items-center gap-5 text-gray-200'>
				<button>Home</button>
				<button>About</button>
				<button>Skills</button>
				<button>Portfolio</button>
				<button>Contact</button>
			</div>
		</nav>
	);
}