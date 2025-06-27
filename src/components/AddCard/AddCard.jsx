

export const AddCard = ({ toggleModal }) => {
	return (
		<div className='absolute overflow-hidden w-full h-[63%] text-black bg-white bottom-0 rounded-2xl px-5 py-5 animate-slideIn63'>
			<div className='flex justify-between'>
				<h2 className='font-medium'>Add new card</h2>
				<button className='cursor-pointer' onClick={toggleModal}>⨉</button>
			</div>
			<div className='mt-5'>
				<h2 className='font-medium text-[14px]'>Personal details</h2>
				<input type="text" placeholder="Full name" className='border border-gray-300 w-full rounded p-2 mt-2' />
				<select name="country" id="country" className='border border-gray-300 w-full mt-2 rounded p-2'>
					<option value="USA">United States</option>
					<option value="UA">Ukraine</option>
					<option value="ENG">England</option>
					<option value="PL">Poland</option>
				</select>
				<input type="text" placeholder="Street address" className='border border-gray-300 w-full rounded p-2 mt-2' />
			</div>
			<div className='mt-5'>
				<h2 className='font-medium text-[14px]'>Card Details</h2>
				<input type="text" placeholder="Card number" className='border border-gray-300 w-full rounded p-2 mt-2' />
				<div className='flex justify-between gap-5'>
					<input type="text" placeholder="mm / yy" className='border border-gray-300 w-full rounded p-2 mt-2' />
					<input type="text" placeholder="CVC" className='border border-gray-300 w-full rounded p-2 mt-2' />
				</div>
			</div>

			<button className='mt-7 bg-blue-700 w-full rounded-xl transition duration-200 text-white h-13 cursor-pointer hover:bg-blue-900 hover:translate-y-[-5px]'>Save card information</button>
		</div>
	)
}