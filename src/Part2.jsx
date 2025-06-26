export function Part2() {
	
	return (
		<div>
			<h1 className="text-center font-bold text-xl mt-10 after:content-['RED\_Penis'] after:ml-0.5">Channel</h1>
			<input 
				type="text" 
				placeholder='Enter' 
				className='focus:border-orange-400 border border-white/50 border-solid transition-colors ease-in-out duration-300 outline-0 mx-auto block mt-10 px-3 rounded py-1.5 placeholder:text-red-400' 
			/>
			<button className='rounded-md bg-orange-500 hover:bg-orange-900 hover:scale-110 transition ease-in-out duration-500 cursor-pointer mt-10 mx-auto block px-2 border border-white/50 border-solid'>
				Click me
			</button>

			<div className='mx-auto flex items-center justify-center w-30 h-30 mt-10 text-center bg-orange-400 transition duration-500 rounded shadow font-bold md:bg-blue-400 lg:bg-purple-400 xl:bg-red-400 2xl:bg-green-400'>Adaptive</div>

			<div className='perspective-distant rotate-x-40 rotate-z-20 transform-3d'>
				<iframe 
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" frameborder="0"
					className='w-[90%] h-[90%] mx-auto rounded shadow-2xl aspect-video'
				/>
			</div>
		</div>
	)
}