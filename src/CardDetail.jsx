import { FaCcVisa, FaCcMastercard } from "react-icons/fa6"

export const CardDetail = ({ toggleModal, type }) => {
	return (
		<div className='absolute overflow-hidden w-full h-[52%] bg-white bottom-0 rounded-xl text-black p-5 animate-slideIn52'>
			<div className='flex justify-between'>
				<h2 className='font-medium'>Card details</h2>
				<button className='cursor-pointer' onClick={toggleModal}>⨉</button>
			</div>

			{type === 'visa' && (
				<>
					<div className="border border-gray-200 w-full min-h-25 rounded-xl mt-5 p-3">
						<div className="flex items-center">
							<FaCcVisa style={{width: '60px', height: '60px', color: 'blue'}} />
							<div className='flex flex-col text-[14px] ml-4 tracking-wide'>
								<div className='font-medium'>Domen Kralj<span className='ml-2 bg-gray-200 p-1 rounded-2xl text-[10px] text-blue-500'>Primary</span></div>
								<div className='text-[11px] opacity-50 mt-1'>**** 6775</div>
							</div>
						</div>
						
						<div className='mt-3'>
							<h2 className='font-light'>Expiry</h2>
							<p className='font-medium'>11 / 24</p>
						</div>

						<div className='mt-3'>
							<h2 className='font-light'>Country</h2>
							<p className='font-medium'>United States</p>
						</div>
					</div>
					<button className='cursor-pointer text-red-500 font-bold mt-5'>Delete card</button>
					<button className='w-full mt-5 bg-blue-200/70 p-3 transition-color duration-200 rounded-xl cursor-pointer text-blue-500 font-bold hover:bg-blue-500 hover:text-white'>Set as your primary card</button>
				</>
			)}

			{type === 'master' && (
				<>
					<div className="border border-gray-200 w-full min-h-25 rounded-xl mt-5 p-3">
						<div className="flex items-center">
							<FaCcMastercard style={{width: '60px', height: '60px'}} />
							<div className='flex flex-col text-[14px] ml-4 tracking-wide'>
								<div className='font-medium'>Domen Kralj</div>
								<div className='text-[11px] opacity-50 mt-1'>**** 3009</div>
							</div>
						</div>
						
						<div className='mt-3'>
							<h2 className='font-light'>Expiry</h2>
							<p className='font-medium'>11 / 24</p>
						</div>

						<div className='mt-3'>
							<h2 className='font-light'>Country</h2>
							<p className='font-medium'>United States</p>
						</div>
					</div>
					<button className='cursor-pointer text-red-500 font-bold mt-5'>Delete card</button>
					<button className='w-full mt-5 bg-blue-200/70 p-3 transition-color duration-200 rounded-xl cursor-pointer text-blue-500 font-bold hover:bg-blue-500 hover:text-white'>Set as your primary card</button>
				</>
			)}
		</div>
	)
}