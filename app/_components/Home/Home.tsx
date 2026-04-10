export function Home() {
	return (
		<section className='h-screen flex justify-center items-center bg-[#efeee8]' id='home'>
			<div>
				<div className='flex flex-col items-center justify-center gap-3 mb-5'>
					<div className='text-5xl font-bold'>Hi, i'am</div>
					<h1 className='text-6xl font-bold uppercase'>Alim Bodzhgua</h1>
				</div>
				<div className='flex flex-col items-center'>
					<h2 className='text-3xl font-light mb-5'>Frontend Developer</h2>
					<p className='text-lg max-w-2xl mx-auto text-center'>
						I build modern and scalable web applications, solving complex problems
						using modern tools providing the best user experience.
					</p>
				</div>
			</div>
		</section>
	);
}
