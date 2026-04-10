export function Home() {
	return (
		<section className='flex h-screen items-center justify-center bg-[#efeee8]' id='home'>
			<div>
				<div className='mb-5 flex flex-col items-center justify-center gap-3'>
					<div className='text-5xl font-bold'>Hi, i'am</div>
					<h1 className='text-6xl font-bold uppercase'>Alim Bodzhgua</h1>
				</div>
				<div className='flex flex-col items-center'>
					<h2 className='mb-5 text-3xl font-light'>Frontend Developer</h2>
					<p className='mx-auto max-w-2xl text-center text-lg'>
						I build modern and scalable web applications, solving complex problems
						using modern tools providing the best user experience.
					</p>
				</div>
			</div>
		</section>
	);
}
