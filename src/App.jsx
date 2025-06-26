

function App() {

	return (
		<div className='container mx-auto relative'>
			<h1 className='text-5xl font-bold text-orange-400 text-center mt-32'>Hello, Tailwind</h1>

			<button className='rounded-md bg-orange-500 hover:bg-orange-900 hover:scale-110 transition ease-in-out duration-500 cursor-pointer mt-10 mx-auto block px-2 border border-white/50 border-solid'>
				Click me
			</button>

			<div className='bg-blue-400 mt-5 w-24 h-32'>
				Width & height
			</div>

			<div className="flex items-center gap-5">
				<div className='bg-blue-300 w-20 h-20'/>
				<div className='bg-blue-300 w-20 h-20'/>
			</div>

			<div className="grid grid-cols-3 gap-5">
				<div className='bg-blue-500 h-20'/>
				<div className='bg-blue-500 h-20'/>
				<div className='bg-blue-500 h-20'/>
			</div>

		<div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
			<div className='bg-white/80 rounded w-1/2 absolute text-black p-5'>
				<h1 className="text-xl font-semibold">Modal Window</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum dicta ullam accusamus nam rerum debitis nesciunt, ipsa veritatis aspernatur nihil. Minima esse neque earum necessitatibus ex vero hic. Velit.</p>
			</div>
		</div>

		</div>
	)
}

export default App